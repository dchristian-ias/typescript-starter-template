const getRepoNameFromPath = (repoPath: string): string => {
	const nameParts = repoPath.split('/');
	const repoFileName = nameParts[nameParts.length - 1] as string;
	const repoName = repoFileName.replace('.git', '');

	return repoName;
};

export default getRepoNameFromPath;
