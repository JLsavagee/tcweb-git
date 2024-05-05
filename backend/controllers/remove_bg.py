import sys
from rembg import remove
print("script called")

def remove_background(input_image_path, output_image_path):
    try:
        with open(input_image_path, 'rb') as input_file:
            input_data = input_file.read()
            output_data = remove(input_data)

            with open(output_image_path, 'wb') as output_file:
                output_file.write(output_data)
        print("Background removal successful.")
    except Exception as e:
        print(f"Error during background removal: {e}")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python remove_bg.py <input_image_path> <output_image_path>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]
    remove_background(input_path, output_path)
