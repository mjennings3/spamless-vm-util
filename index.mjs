import child_process from 'child_process';
import util from 'node:util';

const exec = util.promisify(child_process.exec);
const PATH = "./Files/"

function main() {	

	async function concatAudio(tonefile, ...filesList) {
		filesList = filesList.map(item => item = ` -i '${PATH}${item}'`).join();
		console.log("FILESLIST ", filesList)
		const { stdout, stderr } = await exec(`ffmpeg -i '${PATH}${tonefile}'${filesList} -filter_complex "[0:a][1:a]concat=n=2:v=0:a=1[aout]" -map "[aout]" spamless-vm.mp3`);
		console.log(`stdout: ${stdout}`);
		console.error(`stderr: ${stderr}`)
		return;
	}	
	
		concatAudio('vmtone.mp3', 'vmmsg.mp3');

}

main();
