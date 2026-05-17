from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    """Application settings loaded from environment or .env file.

    Attributes:
        DATABASE_URL: Database connection URL.
        APP_ENV: Application environment name.
    """

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    DATABASE_URL: str
    APP_ENV: str = "development"


@lru_cache
def get_settings() -> Settings:
    """Get cached application settings instance.
    
    Returns:
        Settings: The application settings configuration.
    """
    return Settings()
