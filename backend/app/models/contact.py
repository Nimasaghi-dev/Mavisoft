from app.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
import uuid
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import String, Text, DateTime
from datetime import datetime, timezone


class ContactSubmission(Base):
    """Model representing a contact form submission."""
    __tablename__ = "contact_submissions"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    name: Mapped[str] = mapped_column(String(100))

    email: Mapped[str] = mapped_column(String(255))

    phone: Mapped[str | None] = mapped_column(String(20))

    message: Mapped[str] = mapped_column(Text)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )