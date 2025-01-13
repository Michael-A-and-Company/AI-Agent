import tensorflow as tf
import numpy as np
from sklearn.preprocessing import StandardScaler

# Constants for preprocessing (define based on your training data)
INPUT_FEATURES = 10  # Replace with the number of features in your input data
MEAN = [0.1, 0.2, ...]  # Replace with the mean of each feature from your training data
STD = [0.5, 0.6, ...]  # Replace with the standard deviation of each feature 

# Load the pre-trained model
def load_model(model_path):
    model = tf.keras.models.load_model(model_path)
    return model

# Preprocess input data using pre-calculated mean and standard deviation
def preprocess_input(input_data):
    # Ensure input_data is a numpy array
    input_data = np.array(input_data)
    
    # Reshape to (num_samples, num_features) if needed
    if input_data.ndim == 1: 
        input_data = input_data.reshape(1, -1)

    # Apply standardization
    processed_data = (input_data - MEAN) / STD
    return processed_data

# Model inference
def predict(model, input_data):
    processed_data = preprocess_input(input_data)
    predictions = model.predict(processed_data)
    return predictions

# Example postprocessing (optional)
def postprocess_output(predictions):
    predicted_class = np.argmax(predictions, axis=1)
    return predicted_class
