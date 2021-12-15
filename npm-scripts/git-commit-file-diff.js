const { default: gitCommitFileDiff } = require('../dist/git-commit-file-diff');

(async () => {
	try {
		const repo = 'git@github.com:integralads/firewall-js.git';
		const branch = 'SEC-2509-and-high-severity-packages';
		const baseCommit = 'origin/master';

		const files = await gitCommitFileDiff({ repo, branch, baseCommit });

		console.log(files);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();
