
from fastapi import APIRouter, Depends
from app.core.database import get_db_session
from app.schemas.contact import ContactSchema, ContactResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.services.contact import create_contact_submission


router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=ContactResponse)

async def create_contact(data: ContactSchema, session: AsyncSession= Depends(get_db_session)):
    return await create_contact_submission(data=data, session=session)