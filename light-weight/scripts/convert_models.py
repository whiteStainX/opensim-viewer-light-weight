import os
import sys

# --- Configuration ---

# Get the absolute path of the project root
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))

# Path to the directory where you have downloaded the .osim models
MODELS_INPUT_DIR = os.path.join(PROJECT_ROOT, 'light-weight/public/models_original')

# Path to the directory where the converted .gltf files will be saved
MODELS_OUTPUT_DIR = os.path.join(PROJECT_ROOT, 'light-weight/public/models')

# Path to the directory containing the conversion scripts
CONVERTERS_DIR = os.path.join(PROJECT_ROOT, 'src/backend/osimConverters')

# Add the converters directory to the system path to allow direct imports
sys.path.append(CONVERTERS_DIR)

# Now we can import the functions directly
from convertOsim2Gltf import convertOsim2Gltf
from convertTrc2Gltf import convertTrc2Gltf

# Dictionary mapping generic names to their model file and containing folder
MODELS = {
    'squat': {
        'folder': 'Catelli_high_hip_Flexion_V4.0',
        'file': 'Catelli-V4.0.osim'
    },
    'bench': {
        'folder': 'Bimanual Upper Arm Model',
        'file': 'MoBL_ARMS_bimanual_6_2_21.osim'
    },
    'deadlift': {
        'folder': '.', # Assumes LFB_model.osim is in the root of MODELS_INPUT_DIR
        'file': 'LFB_model.osim'
    }
}

# --- Conversion ---

def convert_models():
    """Converts .osim and .trc files to .gltf."""
    print("Starting model conversion...")

    if not os.path.exists(MODELS_OUTPUT_DIR):
        os.makedirs(MODELS_OUTPUT_DIR)

    for model_name, model_info in MODELS.items():
        model_folder_path = os.path.join(MODELS_INPUT_DIR, model_info['folder'])
        osim_file_path = os.path.join(model_folder_path, model_info['file'])
        
        # The geometry search path should be the folder containing the .osim file and its 'Geometry' subfolder
        geometry_search_path = model_folder_path

        trc_file_path = os.path.join(model_folder_path, f'{model_name}.trc') # Assumes trc might be in the same folder
        gltf_model_output_path = os.path.join(MODELS_OUTPUT_DIR, f'{model_name}.gltf')
        gltf_motion_output_path = os.path.join(MODELS_OUTPUT_DIR, f'{model_name}_motion.gltf')

        # --- Convert .osim to .gltf ---
        if os.path.exists(osim_file_path):
            print(f"Converting {model_info['file']} to {model_name}.gltf...")
            try:
                # The convertOsim2Gltf function returns a pygltflib object
                gltf_data = convertOsim2Gltf(osim_file_path, geometry_search_path)
                # Save the object to a file
                gltf_data.save(gltf_model_output_path)
                print(f"Successfully saved {model_name}.gltf")
            except Exception as e:
                print(f"Error converting {model_info['file']}: {e}")
        else:
            print(f"Warning: {osim_file_path} not found. Skipping model conversion.")

        # --- Convert .trc to .gltf (Optional) ---
        if os.path.exists(trc_file_path):
            print(f"Converting {model_name}.trc to {model_name}_motion.gltf...")
            try:
                gltf_motion_data = convertTrc2Gltf(trc_file_path, 'sphere') # Using 'sphere' as default shape
                gltf_motion_data.save(gltf_motion_output_path)
                print(f"Successfully saved {model_name}_motion.gltf")
            except Exception as e:
                print(f"Error converting {model_name}.trc: {e}")
        else:
            print(f"Info: {trc_file_path} not found. Skipping motion conversion.")

    print("Model conversion complete.")

if __name__ == "__main__":
    convert_models()