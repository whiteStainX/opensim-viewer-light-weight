import os
import subprocess

# This script assumes that you have a Python environment with opensim installed.
# It also assumes that you have downloaded the necessary .osim and .trc files.

# --- Configuration ---

# Get the absolute path of the project root
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))

# Path to the directory where you have downloaded the .osim models
MODELS_INPUT_DIR = os.path.join(PROJECT_ROOT, 'light-weight/public/models_original')

# Path to the directory where the converted .gltf files will be saved
MODELS_OUTPUT_DIR = os.path.join(PROJECT_ROOT, 'light-weight/public/models')

# Path to the directory containing the conversion scripts
CONVERTERS_DIR = os.path.join(PROJECT_ROOT, 'src/backend/osimConverters')

# Dictionary mapping generic names to specific model files
MODELS = {
    'squat': 'Catelli-V4.0.osim',
    'bench': 'MoBL_ARMS_bimanual_6_2_21.osim',
    'deadlift': 'LFB_model.osim'
}

# --- Conversion ---

def convert_models():
    """Converts .osim and .trc files to .gltf."""
    print("Starting model conversion...")

    if not os.path.exists(MODELS_OUTPUT_DIR):
        os.makedirs(MODELS_OUTPUT_DIR)

    for model_name, osim_filename in MODELS.items():
        osim_file_path = os.path.join(MODELS_INPUT_DIR, osim_filename)
        # Assuming .trc files might have the same base name as the generic model name
        trc_file_path = os.path.join(MODELS_INPUT_DIR, f'{model_name}.trc')
        gltf_model_output = os.path.join(MODELS_OUTPUT_DIR, f'{model_name}.gltf')
        gltf_motion_output = os.path.join(MODELS_OUTPUT_DIR, f'{model_name}_motion.gltf')

        # --- Convert .osim to .gltf ---
        if os.path.exists(osim_file_path):
            print(f"Converting {osim_filename} to {model_name}.gltf...")
            subprocess.run([
                'python', 
                os.path.join(CONVERTERS_DIR, 'convertOsim2Gltf.py'), 
                osim_file_path, 
                gltf_model_output
            ], check=True)
        else:
            print(f"Warning: {osim_file_path} not found. Skipping model conversion.")

        # --- Convert .trc to .gltf (Optional) ---
        if os.path.exists(trc_file_path):
            print(f"Converting {model_name}.trc to {model_name}_motion.gltf...")
            subprocess.run([
                'python', 
                os.path.join(CONVERTERS_DIR, 'convertTrc2Gltf.py'), 
                trc_file_path, 
                gltf_motion_output
            ], check=True)
        else:
            print(f"Info: {trc_file_path} not found. Skipping motion conversion.")

    print("Model conversion complete.")

if __name__ == "__main__":
    convert_models()