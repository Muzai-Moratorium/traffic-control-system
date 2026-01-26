# 파이널 프로젝트

20260126~

파이널 프로젝트 구상도 


**final/**

**├── backend/                      # FastAPI 백엔드**

**│   ├── app/**

**│   │   ├── main.py              # FastAPI 앱 진입점**

**│   │   ├── routers/             # API 라우터들**

**│   │   │   ├── cctv.py          # CCTV 스트리밍**

**│   │   │   ├── traffic.py       # 교통 상태 API**

**│   │   │   ├── predict.py       # 교통량 예측**

**│   │   │   ├── detection.py     # YOLO 감지 (역주행, 콘 등)**

**│   │   │   └── auth.py          # 인증**

**│   │   ├── models/              # SQLAlchemy 모델**

**│   │   ├── services/            # 비즈니스 로직**

**│   │   ├── ml/                  # ML 모델 (YOLO, XGBoost)**

**│   │   └── websocket/           # 실시간 스트리밍용 WebSocket**

**│   └── requirements.txt**

**│**

**├── frontend/                     # Next.js 프론트엔드**

**│   └── src/**

**│       ├── app/**

**│       │   ├── page.jsx         # 메인 대시보드**

**│       │   ├── cctv/            # CCTV 페이지**

**│       │   ├── traffic/         # 교통 상태 페이지**

**│       │   └── predict/         # 예측 페이지**

**│       └── components/          # 재사용 컴포넌트**

**└── docker-compose.yml           # 배포용**



1. **실시간 스트리밍** → WebSocket 사용

   * Flask의 동기 방식보다 FastAPI + WebSocket이 CCTV 스트리밍에 훨씬 적합
2. **API 설계** → RESTful + 자동 문서화

   * FastAPI의 Pydantic 스키마로 타입 안정성 확보
3. **프론트엔드** → Next.js의 현대적 UI

   * 카카오맵 연동, 실시간 그래프, 반응형 디자인
