const { spawn } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');

// Absolute path to your Python script
const pythonScriptPath = path.join(__dirname, 'controllers', 'remove_bg.py');

const startWatching = () => {
    const watcher = chokidar.watch('./uploaded_files', { ignored: /^\./, persistent: true });

    watcher
        .on('add', function(filePath) {
            console.log('File', filePath, 'has been added', pythonScriptPath);
            const output_path = filePath.replace('uploaded_files', 'processed_files');
            console.log(`Running Python script at: ${pythonScriptPath} with input: ${filePath} and output: ${output_path}`);
            const removeBgProcess = spawn('python', [pythonScriptPath, filePath, output_path]);

            removeBgProcess.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            removeBgProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });

            removeBgProcess.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
            });
        })
        .on('change', function(filePath) {
            console.log('File', filePath, 'has been changed');
        })
        .on('unlink', function(filePath) {
            console.log('File', filePath, 'has been removed');
        });
};

module.exports = startWatching;
