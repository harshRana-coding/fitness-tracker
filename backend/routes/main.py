import cv2
import numpy as np

from fastapi import APIRouter, Form, UploadFile, File

from blood_report_analyzer.main import analyze_blood_sugar_report
from diet_plan_recommender.main import get_meal_plan
from nutrition_need_calculator.diseases import get_diseases
from nutrition_need_calculator.need_calculator import get_dietary_need
from medic.main import calculate_bmi, calculate_dream_weight
from workout_routine_recommender.recommender import predict_workout_plan

router = APIRouter(
    prefix="/api",
    tags=["core"],
    responses={404: {"description": "The requested URL was not found"}},
)


@router.post("/")
async def root(
        height: int = Form(...),
        weight: int = Form(...),
        age: int = Form(...),
        gender: str = Form(...),
        foodType: str = Form(...)
):
    # Validate gender
    if gender.lower() not in ["male", "female"]:
        return {"error": "Invalid gender. Please provide 'male' or 'female'."}
    
    # Validate food type
    if foodType.lower() not in ["veg", "nonveg","both"]:
        return {"error": "Invalid gender. Please provide valid food type."}

    foodPreference = []
    if (foodType.lower()=="veg"):
        foodPreference.append("veg")
    if (foodType.lower()=="nonveg"):
        foodPreference.append("non-veg")
    if (foodType.lower()=="both"):
        foodPreference.append("veg")
        foodPreference.append("non-veg")
    bmi = calculate_bmi(weight, height)
    dream_weight = calculate_dream_weight(weight, bmi)

    diseases = None

    # Calculate nutritional needs
    nutrition_need = get_dietary_need(weight, height, age, gender.lower())
    
    # Generate workout plan
    workout_plan = predict_workout_plan(gender, age, weight, dream_weight, bmi)

    # Generate meal plan
    meal_plan = get_meal_plan(['low_sodium_diet', 'low_fat_diet'], diseases, ['calcium', 'vitamin_c'], foodPreference, 'i love indian')


    return {
        "need": nutrition_need,
        "workout_plan": workout_plan,
        "meal_plan": meal_plan,
    }
