# medical_smart_compose


**UI INSTALL**
* Clone the repository
* Download dependencies (download via pip install or conda install -c anaconda):
    * Flask: https://anaconda.org/anaconda/flask
    * React: https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm
    * Material-UI: https://material-ui.com/getting-started/installation/
* In a terminal navigate into the server folder of the repo and set the flask environment to the main.py
    * >> cd server
    * >> export FLASK_APP=main.py
* You should see that the server is up and running, make sure to download the necessary models for each procedure or the default GPT2 models will be used
* Return to the main repo folder and navigate down into the gpt2-frontend folder, then initiate the react app
    * >> cd ..
    * >> cd gpt2-frontend
    * npm start
* This should trigger the react app in your default browser and you can now use the models to make text predictions!




**MODELS**

Our models are larger than 100MB and therefore can not be uploaded on our GitHub repository. In order to run our code, you would have to download each model using the following Google Drive links (accessible only with a @berkeley.edu email address): 

Medicine Model : 
https://drive.google.com/open?id=1pV19Qd-DgJGeqeCG5bmjpR1HMXMvjv8P

Neurology Model :
https://drive.google.com/open?id=1-5kFGGUC_NhjS_859C98sTMhvIf9IRam

Surgery Model : 
https://drive.google.com/open?id=1-288rKnvae0Z59YAp9rLFN4kfSHzWUfd

Cardiothoracic Model : 
https://drive.google.com/open?id=1ipSVqx2kQQ_OXUUdBM91Pgk8uP8RTzS1




**DATA FAQ**

The team's data came from the MIT MIMIC-III database, a large, freely-available database comprising de-identified health-related data associated with over forty thousand patients who stayed in critical care units of the Beth Israel Deaconess Medical Center between 2001 and 2012.

The database includes information such as demographics, vital sign measurements made at the bedside (~1 data point per hour), laboratory test results, procedures, medications, caregiver notes, imaging reports, and mortality (including post-hospital discharge).

MIMIC supports a diverse range of analytic studies spanning epidemiology, clinical decision-rule improvement, and electronic tool development. It is notable for three factors:
- it is freely available to researchers worldwide
- it encompasses a diverse and very large population of ICU patients
- it contains highly granular' data including lab results, vital signs, medications, and more

Due to privacy concerns, our data set was not posted in our GitHub. For reference though, an example medical report has been provided, accessible in the "Data_preprocessing" folder, file named "Example Medical Report.rtf". Should more information be needed, please contact David Scanlan at davidscanlan@berkeley.edu


**PACKAGES/LIBRARIES**

- Python
- Flask 
- Google Colab
- React 
- Transformers library (includes tensroflow and pytorch libraries)
- Pandas library
