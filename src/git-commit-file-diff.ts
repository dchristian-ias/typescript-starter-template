import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import './config/init-module-alias';
import simpleGit, { SimpleGit } from 'simple-git';
import getRepoNameFromPath from '@src/utils/get-repo-name-from-path';

interface Props {
	repo: string;
	branch: string;
	baseCommit: string;
}

const gitCommitFileDiff = async ({ repo, branch, baseCommit = 'origin/master' }: Props): Promise<string> => {
	const repoName = getRepoNameFromPath(repo);
	const localPathToRepo = path.join(__dirname, '..', 'repos', repoName);

	if (!fs.existsSync(localPathToRepo)) {
		shell.mkdir(localPathToRepo);

		const git: SimpleGit = simpleGit(localPathToRepo);

		await git.clone(repo, localPathToRepo);
	}

	const git: SimpleGit = simpleGit(localPathToRepo);

	await git.checkout(branch);

	const files = await git.diff(['--name-only', baseCommit]);

	return files;
};

export default gitCommitFileDiff;
