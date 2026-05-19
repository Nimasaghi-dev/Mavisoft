from fastapi import FastAPI
from app.routers.contact import router

app = FastAPI(title="Mavisoft API", version="0.1.0")
app.include_router(router)

@app.get("/health")
async def health():
    return {"status": "ok"}