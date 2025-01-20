
    // List of GitHub repositories
    const repositories = [
      'ristoxxx/newcv/main',
      'ristoxxx/budgify/master',
      'ristoxxx/HomeDasboard/main',
      'ristoxxx/ristoxxx.github.io/master',
      'ristoxxx/ravintolaruletti/main',
      'ristoxxx/barber/main',
    ];

    const repoContainer = document.getElementById('repositories');

    // Function to fetch and display repository data
    async function fetchAndDisplayRepos() {
      for (const repo of repositories) {
        const [owner, repoName, branch] = repo.split('/');
        const apiUrl = `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/README.md`;
        const imgUrl = repoName === 'budgify' 
            ? `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/public/Grafico.png` 
            : `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/img.PNG`;
        const repoUrl = `https://github.com/${owner}/${repoName}`;

        try {
          // Fetch README data
          const response = await fetch(apiUrl, {
            headers: { Accept: 'application/vnd.github.v3.raw' }
          });
          const readmeContent = await response.text();

          // Extract title from README (assuming it's in the first heading)
          const titleMatch = readmeContent.match(/^#\s(.+)/);
          const title = titleMatch ? titleMatch[1] : 'No Title';
          const description = readmeContent
            .substring(titleMatch[0].length)
            .trim()
            .split('\n') // Split content into lines
            .filter(line => !line.trim().startsWith('!' || '[')) // Remove lines starting with "!"
            .join(' ') // Replace newlines with spaces
            .trim(); // Trim leading/trailing spaces
          const truncatedDescription = description.length > 100 
            ? description.substring(0, 100) + '...' 
            : description;

          // Create a card for the repository
          const card = document.createElement('li');
          //card.className = 'repo-card';
          if ((repoContainer.children.length) % 3 === 0) {
            card.className = 'last';
          }

          card.innerHTML = `
            <div class="imgholder"><img src="${imgUrl}" alt="${title}" width="284" height="144">
            </div>
            <h2>${title}</h2>
            <p>${truncatedDescription}</p>
            <p class="readmore"><a href="${repoUrl}" target="_blank">View on GitHub</a></p>
          `;

          repoContainer.appendChild(card);
        } catch (error) {
          console.error(`Error fetching data for ${repo}:`, error);
        }
      }
    }
    fetchAndDisplayRepos();