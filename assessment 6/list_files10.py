"""
Program to list files in a directory using os module.
"""

# Step 1: Import os module
import os

# Step 2: Function to list files and directories
def list_directory_contents(path="."):
    """
    List all files and directories in the given path.
    Defaults to current directory if no path is provided.
    """
    print(f"\nListing contents of: {os.path.abspath(path)}")
    print("-" * 60)
    
    try:
        # Get all items in directory
        items = os.listdir(path)
        
        if not items:
            print("Directory is empty.")
            return
        
        # Separate files and directories
        files = []
        directories = []
        
        for item in items:
            item_path = os.path.join(path, item)
            if os.path.isfile(item_path):
                files.append(item)
            elif os.path.isdir(item_path):
                directories.append(item)
        
        # List directories
        if directories:
            print("DIRECTORIES:")
            for directory in sorted(directories):
                print(f"  📁 {directory}/")
        
        # List files
        if files:
            print("\nFILES:")
            for file in sorted(files):
                file_path = os.path.join(path, file)
                size = os.path.getsize(file_path)
                print(f"  📄 {file} ({size:,} bytes)")
        
        # Statistics
        print("\n" + "-" * 60)
        print(f"Total: {len(directories)} directories, {len(files)} files")
        
    except FileNotFoundError:
        print(f"Error: Directory '{path}' not found.")
    except PermissionError:
        print(f"Error: Permission denied for '{path}'.")

# Step 3: Function to show detailed file information
def show_detailed_file_info(path="."):
    """Show detailed information about files in a directory."""
    print(f"\nDetailed file information for: {os.path.abspath(path)}")
    print("-" * 80)
    
    try:
        items = os.listdir(path)
        
        for item in sorted(items):
            item_path = os.path.join(path, item)
            
            if os.path.isfile(item_path):
                size = os.path.getsize(item_path)
                modified_time = os.path.getmtime(item_path)
                
                # Convert timestamp to readable format
                from datetime import datetime
                modified_str = datetime.fromtimestamp(modified_time).strftime('%Y-%m-%d %H:%M:%S')
                
                # Get file extension
                _, extension = os.path.splitext(item)
                
                print(f"📄 {item:30} | Size: {size:10,} bytes | "
                      f"Modified: {modified_str} | Ext: {extension}")
    
    except Exception as e:
        print(f"Error: {e}")

# Step 4: Function to explore subdirectories
def explore_directory_tree(path=".", level=0):
    """Recursively explore and display directory tree."""
    prefix = "  " * level
    
    try:
        items = os.listdir(path)
        
        for item in sorted(items):
            item_path = os.path.join(path, item)
            
            if os.path.isdir(item_path):
                print(f"{prefix}📁 {item}/")
                # Recursively explore subdirectory (limit depth to 2 for demo)
                if level < 2:
                    explore_directory_tree(item_path, level + 1)
            else:
                print(f"{prefix}📄 {item}")
    
    except PermissionError:
        print(f"{prefix}⚠️  [Permission denied]")

# Step 5: Main program
print("Directory Lister using OS Module")
print("=" * 60)

# Get current working directory
current_dir = os.getcwd()
print(f"Current working directory: {current_dir}")

# List current directory
list_directory_contents()

# Show detailed information
show_detailed_file_info()

print("\n" + "=" * 60)
print("DIRECTORY TREE (limited to 2 levels deep)")
print("-" * 60)
explore_directory_tree()

print("\n" + "=" * 60)

# Interactive part: List specific directory
print("\nLIST SPECIFIC DIRECTORY")
print("-" * 40)

while True:
    user_path = input("\nEnter directory path (or 'quit' to exit, '..' for parent): ").strip()
    
    if user_path.lower() == 'quit':
        break
    elif user_path == '..':
        # Go to parent directory
        os.chdir('..')
        current_dir = os.getcwd()
        print(f"\nChanged to parent directory: {current_dir}")
    elif user_path == '':
        # List current directory
        current_dir = os.getcwd()
        print(f"\nCurrent directory: {current_dir}")
    else:
        # Try to change to specified directory
        try:
            if os.path.exists(user_path):
                if os.path.isdir(user_path):
                    os.chdir(user_path)
                    current_dir = os.getcwd()
                    print(f"\nChanged to directory: {current_dir}")
                else:
                    print(f"'{user_path}' is not a directory.")
            else:
                print(f"Path '{user_path}' does not exist.")
        except Exception as e:
            print(f"Error: {e}")
    
    # List contents of current directory
    list_directory_contents(current_dir)

print("\nThank you for using Directory Lister!")