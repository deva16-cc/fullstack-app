from fastapi import FastAPI, UploadFile
from database import SessionLocal
from models import Employee
import boto3

app=FastAPI()

@app.get("/api/users")

def get_users():

    db=SessionLocal()

    users=db.query(Employee).all()

    result=[]

    for user in users:

        result.append({
            "id":user.id,
            "name":user.name,
            "email":user.email
        })

    return result


@app.post("/upload")

async def upload(file:UploadFile):

    s3=boto3.client("s3")

    s3.upload_fileobj(file.file,"your-bucket",file.filename)

    return {"message":"Uploaded Successfully"}
