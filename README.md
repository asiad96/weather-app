# Weather App
Weather App

Getting Started

This guide will help you set up the development environment for the Weather App project.

Prerequisites

Ensure you have the following installed:

Git

Node.js (Latest LTS)

Python 3.x

A package manager (npm or yarn)

Installation Steps

1️⃣ Clone the Repository

git clone git@github.com:asiad96/weather-app.git
cd weather-app

2️⃣ Install Node.js (Latest LTS)

macOS/Linux (Homebrew):

brew update
brew install node

Windows:

Download and install Node.js from nodejs.org. Choose the LTS version.

Verify installation:

node -v
npm -v

3️⃣ Install Python 3.x

macOS/Linux (Homebrew):

brew install python

Windows:

Download and install Python from python.org.
Ensure python and pip are available in the terminal:

python --version
pip --version

4️⃣ Set Up Virtual Environment (Backend)

macOS/Linux:

python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip

Windows:

python -m venv venv
venv\Scripts\activate
pip install --upgrade pip

To deactivate the virtual environment:

deactivate

5️⃣ Install Project Dependencies

Frontend (if applicable):

cd frontend
npm install

Backend:

cd backend
pip install -r requirements.txt

6️⃣ Run a "Hello World" Test

Frontend:

npm start

Backend:

python main.py  # Adjust as needed for your framework
