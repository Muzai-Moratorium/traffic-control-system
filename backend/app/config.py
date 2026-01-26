"""
애플리케이션 설정
"""
import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    # 앱 설정
    APP_NAME: str = "교통 관제 시스템"
    DEBUG: bool = os.getenv("DEBUG", "True").lower() == "true"
    
    # DB 설정
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", 
        "mysql+pymysql://root:1234@localhost:3306/traffic_db?charset=utf8mb4"
    )
    
    # YOLO 모델 경로
    YOLO_MODEL_PATH: str = os.getenv(
        "YOLO_MODEL_PATH",
        "weights/yolo/yolo11n.onnx"
    )
    
    # OpenVINO 모델 경로
    OPENVINO_MODEL_PATH: str = os.getenv(
        "OPENVINO_MODEL_PATH",
        "weights/yolo/yolo11n_openvino_model"
    )


settings = Settings()
