<p align="center">
<a href=https://github.com/Projectzenn/app target="_blank">
<img src='/placeholder.jpg' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/Projectzenn/app" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/Projectzenn/app" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/Projectzenn/app" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/Projectzenn/app" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

This app is a client app for project and company registration by CareerZen. It utilizes various libraries and tools such as headlessui/react, hookform/resolvers, pushprotocol/restapi, and more.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .env
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── app.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── group
│   │   └── [address]
│   │       ├── add-achievement.tsx
│   │       ├── create-achievement.tsx
│   │       ├── group-achievements.tsx
│   │       ├── group-details.tsx
│   │       ├── group-member.tsx
│   │       ├── group-recruits.tsx
│   │       └── page.tsx
│   ├── groups
│   │   ├── create
│   │   │   ├── group-form.tsx
│   │   │   └── page.tsx
│   │   ├── group-list-item.tsx
│   │   ├── group-list.tsx
│   │   ├── layout.tsx
│   │   ├── my-groups.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── nav-bar.tsx
│   ├── nft
│   │   ├── [contract]
│   │   │   └── [tokenid]
│   │   │       └── page.tsx
│   │   └── create
│   │       ├── create-achievement-form.tsx
│   │       └── page.tsx
│   ├── onboard
│   │   ├── layout.tsx
│   │   ├── mint
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── profile-form.tsx
│   │   └── profile
│   │       └── page.tsx
│   ├── page.tsx
│   ├── profile
│   │   ├── avatar-nfts.tsx
│   │   ├── connections.tsx
│   │   ├── followers.tsx
│   │   ├── layout.tsx
│   │   ├── mint-avatar.tsx
│   │   ├── page.tsx
│   │   ├── profile-detail-card.tsx
│   │   ├── profile-details.tsx
│   │   ├── profile-items.tsx
│   │   ├── profile-nft-item.tsx
│   │   └── select
│   │       ├── nft-owned.tsx
│   │       └── page.tsx
│   ├── profiles
│   │   ├── [id]
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── list-profiles.tsx
│   │   └── page.tsx
│   └── project
│       ├── [address]
│       │   ├── links.tsx
│       │   ├── page.tsx
│       │   ├── project-detail.tsx
│       │   ├── project-info.tsx
│       │   ├── project-members.tsx
│       │   ├── project-nfts.tsx
│       │   ├── project-works.tsx
│       │   └── request-nft.tsx
│       ├── create
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── project-item.tsx
├── components.json
├── components
│   ├── card
│   │   ├── group-profile-card.tsx
│   │   ├── member-card.tsx
│   │   ├── nft-list-item-loading.tsx
│   │   ├── nft-list-item.tsx
│   │   ├── pending-profile-card.tsx
│   │   └── profile-card.tsx
│   ├── connections
│   │   └── github.tsx
│   ├── extra
│   │   ├── add-member-item.tsx
│   │   ├── add-member.tsx
│   │   ├── chat
│   │   │   ├── chat.tsx
│   │   │   ├── create-push-group.tsx
│   │   │   ├── message-item.tsx
│   │   │   ├── openchat.tsx
│   │   │   ├── push-chat.tsx
│   │   │   ├── push-group-chat.tsx
│   │   │   └── user-chat.tsx
│   │   ├── media-uploader.tsx
│   │   └── search.tsx
│   ├── form
│   │   └── request-nft-form.tsx
│   ├── loading.json
│   ├── loading.tsx
│   ├── modal
│   │   ├── modal-layout.tsx
│   │   ├── nft-detail-modal.tsx
│   │   └── upload-works.tsx
│   ├── nft
│   │   ├── display-nft.tsx
│   │   └── pending-nft.tsx
│   ├── screens
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── no-data.tsx
│   │   └── transaction-data.tsx
│   ├── theme-provider.tsx
│   ├── ui
│   │   ├── alert.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── command.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── layer.tsx
│   │   ├── popover.tsx
│   │   ├── radio-group.tsx
│   │   ├── select.tsx
│   │   ├── skeleton.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   └── user
│       ├── connect-modal.tsx
│       ├── create-profile-modal.tsx
│       ├── login.tsx
│       ├── modal-layout.tsx
│       ├── profile-balance.tsx
│       └── profile-details.tsx
├── helpers
│   ├── mumbai.tsx
│   └── usePush.tsx
├── lib
│   ├── abi
│   │   ├── group.abi.json
│   │   ├── groupRegistry.abi.json
│   │   ├── project.abi.json
│   │   └── projectRegistry.abi.json
│   ├── constants.ts
│   ├── upload.ts
│   ├── useFetchData.tsx
│   ├── usePushProtocol.tsx
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── icons
│   │   ├── TikTok=Color.png.zip
│   │   ├── discord.png
│   │   ├── dribbble.png
│   │   ├── ens.png
│   │   ├── facebook.png
│   │   ├── farcaster.png
│   │   ├── figma.png
│   │   ├── github.png
│   │   ├── instagram.png
│   │   ├── lenster.png
│   │   ├── link.png
│   │   ├── linkedin.png
│   │   ├── medium.png
│   │   ├── nextid.png
│   │   ├── note.png
│   │   ├── notion.png
│   │   ├── pinterest.png
│   │   ├── snapchat.png
│   │   ├── spotify.png
│   │   ├── threads.png
│   │   ├── tiktok.png
│   │   ├── tumblr.png
│   │   ├── twitter.png
│   │   ├── url.png
│   │   ├── x.png
│   │   └── youtube.png
│   ├── images
│   │   ├── careerzen.png
│   │   ├── image.png
│   │   └── no-item.png
│   ├── next.svg
│   ├── parts
│   │   ├── acessary_basic1.png
│   │   ├── acessary_basic2.png
│   │   ├── acessary_basic3.png
│   │   ├── acessary_basic4.png
│   │   ├── acessary_basic5.png
│   │   ├── acessary_basic6.png
│   │   ├── acessary_basic7.png
│   │   ├── acessary_developer.png
│   │   ├── background.png
│   │   ├── cloth_basic.png
│   │   ├── cloth_hood1.png
│   │   ├── cloth_hood2.png
│   │   ├── cloth_hood3.png
│   │   ├── cloth_hood4.png
│   │   ├── cloth_jacket.png
│   │   ├── cloth_poor.png
│   │   ├── cloth_shirt.png
│   │   ├── cloth_wind.png
│   │   ├── eyes1.png
│   │   ├── eyes2.png
│   │   ├── eyes3.png
│   │   ├── eyes4.png
│   │   ├── face.png
│   │   ├── hair1.png
│   │   ├── hair2.png
│   │   ├── hair3.png
│   │   ├── hair4.png
│   │   ├── mouth1.png
│   │   ├── mouth2.png
│   │   └── mouth3.png
│   └── vercel.svg
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Project Summary

- [app](app): Main application directory.
- [app/group](app/group): Contains functionality related to groups.
- [app/groups](app/groups): Handles group-related operations.
- [app/nft](app/nft): Manages non-fungible tokens.
- [app/onboard](app/onboard): Handles onboarding and user profiles.
- [app/profile](app/profile): Manages user profiles.
- [app/profiles](app/profiles): Handles multiple user profiles.
- [app/project](app/project): Manages project-related functionalities.
- [components](components): Contains reusable UI components.
- [helpers](helpers): Contains utility/helper functions.

## 💻 Stack

- [headlessui/react](https://github.com/tailwindlabs/headlessui): UI components for building accessible and customizable interfaces.
- [radix-ui/react-select](https://github.com/radix-ui/react-select): A flexible and accessible select component.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form): Performant and flexible forms with easy validation.
- [next](https://nextjs.org/): A React framework for building server-rendered applications.
- [xmtp/react-sdk](https://github.com/xmtp/react-sdk): SDK for integrating XMTP (Cross-Modal Transfer Protocol) into React applications.
- [ethers](https://github.com/ethers-io/ethers.js/): A library for interacting with Ethereum.
- [lottie-react](https://github.com/LottieFiles/lottie-react): Render After Effects animations natively in React.
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

## ⚙️ Setting Up

#### Your Environment Variable

- Step 1

- Step 2

## 🚀 Run Locally
1.Clone the app repository:
```sh
git clone https://github.com/Projectzenn/app
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/Projectzenn/app/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Projectzenn/app" />
</a>

## ☁️ Deploy

`[Application name](Your App URL)`

## 📄 License

[**Add Your License**](https://choosealicense.com)



# Technologies used
## The Graph 
We heavily rely on the graph for integrating all indexing of on-chain data we build two graph that indexed: 
### Groups
Groups [api](https://api.studio.thegraph.com/query/49385/groups/version/latest) [repository](https://github.com/Projectzenn/groupsGraph)
[Group Registry](https://mumbai.polyscan.com/address/0x81552b688eeE0b1daBeEc3e9b6a45ff2FF062e05) 
[Group Regstry Contract link]([https://repository-link](https://github.com/Projectzenn/contracts/blob/main/src/GroupRegistry.sol))
[Group Contract](https://contract-link) - 
[Achievements](https://contract-link) - [Repository link](https://repository-link)



### Projects
[Project api](https://api.studio.thegraph.com/query/49385/projects/version/latest)
[Projects repositry](https://github.com/Projectzenn/projectGraph)
[Projects Registry](https://contract-link)
[Project Contract](https://contract-link)

## Push Protocol
### Push Chat
We use push protocol chats for  three different occassions: 
- individual chat: for users to chat to eachother based on someone career status
- group chat: chat for people that are in the same group: everyone that hold that token they are able to enter the groupchat and start chatting to each other. This can be used to collectively decide on new achievement design, requirements or the acceptance of new users 
- project chat: token based access to the project chat for all the users that hold the ERC721 token of the project. 

### Push Notification:
Within the project the members of the Project are able to setup notification channels for updates about  newly added members, new achievements received or work uploaded. 
The group admin is able to setup the notification based to select or unselect any of the three selections above. If this select will be widely used by the users we are able to set up the some logic for groups to receive notification based on important changes.  

## Next.ID
[Usage](https://github.com/Projectzenn/backend/tree/main/src/nextid)
We will be using NEXT.id for the verifying the proofs of the github accounts and other social media accounts. 
We setup our platform, so we can start using next.id service for linking accounts together. When accounts are connected we might see integration based on acquired achievements. We will be analyzing overlapping activities together with skillsets to create a matching based career service, for projects. 

## Polybase
For our backend solution we use polybase to integrate offchain requests that needs to be validated by project owners or groups owners first, we do this to reduce the gas usage of users. Most of the gas costs are covered by the contract owners, this provide an easier way for users to start using and testing the application. 
