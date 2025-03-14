# Agent Insights: Transparent Reviews, Trusted Choices
We are developing a web app to assist GenZ homebuyer and seller to choose their best possible real estate agent.

## Problem Statement
How can Gen-Z home buyers and sellers in Washington State efficiently discover and partner with a trustworthy real estate advisor, empowering them to navigate the market and make the most informed decision?

## Problem Background
### Context
According to the National Association of Realtors, there were 4,090,000 existing home sales in 2023. 88% of buyers purchased their homes through a Realtor or broker. 90% of sellers were assisted by a Realtor in the sale of their home. Finding a trusted real estate agent is an important problem for potential home purchasers. When making a large purchase such as a real estate, the complexity of the real estate purchase process causes a lot of potential home purchasers to lost an extensively amount of their savings.

### Current Need
While there are a number of platforms on the market today that are designed to help people find a real estate agent, such as Zillow, Realtor.com, and Redfin, there are still a number of concerns and difficulties in using these platforms that prevent people from finding a truly suitable and trustworthy real estate agent. First, the transparency and fairness of the realtor listings suggested by the platforms is often questioned. Existing platforms divert potential clients to real estate agents who are willing to pay exorbitant advertising fees rather than agents who may be more skilled or better suited to the needs of a particular buyer or seller. This mechanism prevents consumers from being matched with the best agent for their services. Secondly, the reviews on many platforms can be manipulated and only selectively present positive reviews leaving existing online reviews unreliable. Finally, while some platforms provide common contact information for agents, there is often no mechanism to track responsiveness or ensure ongoing communication after the initial contact. Surveys show that up to 47% of online inquiries are simply ignored. These factors greatly reduce the efficiency of the process of choosing the trusted real estate agent.

### Potential Impact
If homebuyers and sellers don’t have a trusted advisor, they might feel overwhelmed and uncertain about one of the most important financial decisions of their lives. They could end up overpaying, underselling, or losing out on the perfect home. Without transparency or reliable guidance, they’re left to navigate a competitive market blindfolded, which can cause frustration, regret, and a lot of stress. Making no effort to solve this issue means people may miss out on achieving their dream home or investment goals.

## Feature
### P0: 
- Search functionality for finding agents
- Transparent agent profiles
- User ratings and reviews of advisors
- AI chatbot connect user with agents that match their goals
### P1:
- Share the agent profile
- Favorite certain agent
- Agent comparison
- Interactive quiz that matches up the user with a random advisor
- Educational resource hub
### P2:
- Fraud Detection & Risk Scoring for Agents
- Service Completion Rate Analytics
- Communicate with agents in real time


## Codebase Overview
We mainly use CSS, HTML, Javascript,tailwind/bootstrap to build the solution. The solution will possibly be hosted on firebase.
The codebase inclues:

- **`/src/`**: Contains the main application logic, including reusable components and pages.
- **`/public/`**: Holds static files such as images and icons used in the app.
- **`firebase.json`**: Manages Firebase hosting and database configuration.
- **`Draft/`**: Contains static mockups for the initial web app design.
- **`README.md`**: Provides project documentation, including setup and contribution guidelines.
- **`.gitignore`**: Excludes unnecessary files from version control.
- **`package.json`**: Lists project dependencies and npm scripts for consistent development.


## Build and deploy instruction
### Prerequisites
- Operating System: Windows, macOS, or Linux
- Code Editor: Visual Studio Code
- Runtime Environment: Node.js (version >= 16.0)
- Frontend Framework: React
- Backend Service: Firebase
- Package Manager: npm

### Installation Steps
- Clone the repository: git clone <repo_url>
- Install dependencies: npm install
- Intall bootstrap: npm install react-bootstrap bootstrap
- Start the development server: npm start
  
## To contribute
1. Clone using the web URL.
```bash
git clone <repo_url>
```
2. Create a branch
```bash
git checkout -b branch name
```
3. Make changes, commit, and push
```bash
git add . 
git commit -m "message"
git push origin branch name
```
4. Open and Complete a Pull Request in Github.



## Citation
Stults, R. (2025, January 22). 6 reasons you should never buy or sell a home without an agent. Real Estate News & Insights | realtor.com®. https://www.realtor.com/advice/buy/why-you-should-use-realtor/?utm_source=chatgpt.com
Explains failing to find a trusted real estate advisor can lead to significant challenges for potential home buyers or sellers in Washington State.

Cazee, A. (2023, July 31). 5 pain points in real estate and ways to solve them - alliance title blog. Alliance Title & Escrow. https://alliancetitle.com/2023/08/5-pain-points-in-real-estate-and-ways-to-solve-them/

About the AuthorJason Fox Facebook Twitter"The best way to find yourself is to lose yourself in the service of others."  The Madrona Group | 5 Puget Sound John L. Scott Locations. https://www.themadronagroup.com/nar-settlement-washington/

Real estate in a Digital age. National Association of REALTORS®. (2021, September 23). https://www.nar.realtor/research-and-statistics/research-reports/real-estate-in-a-digital-age

Brobeck, S. (2024, January 26). Nearly half of real estate agents sold no or one house this past year · Consumer Federation of America. Consumer Federation of America. https://consumerfed.org/press_release/nearly-half-of-real-estate-agents-sold-no-or-one-house-this-past-year

Quick real estate statistics. (2024, July 8). https://www.nar.realtor/research-and-statistics/quick-real-estate-statistics
