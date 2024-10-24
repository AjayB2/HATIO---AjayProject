const axios = require('axios');

exports.exportGist = async (project) => {
  const content = `
# ${project.title}
Summary: ${project.todos.filter(t => t.status === 'completed').length} / ${project.todos.length} completed.

## Pending Todos
${project.todos.filter(t => t.status === 'pending').map(t => `- [ ] ${t.description}`).join('\n')}

## Completed Todos
${project.todos.filter(t => t.status === 'completed').map(t => `- [x] ${t.description}`).join('\n')}
`;

  const gistResponse = await axios.post(
    'https://api.github.com/gists',
    {
      files: { [`${project.title}.md`]: { content } },
      public: false
    },
    { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } }
  );

  return gistResponse.data.html_url;
};
