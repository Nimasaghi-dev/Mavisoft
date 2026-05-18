from pydantic import BaseModel, EmailStr, Field
import uuid
from datetime import datetime

class ContactSchema(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1, max_length=2000)
    phone: str | None = Field(default=None, max_length=20)


class ContactResponse(BaseModel):
    id: uuid.UUID
    name: str 
    email: EmailStr
    phone: str | None 
    message: str 
    created_at: datetime

    model_config = {"from_attributes": True}