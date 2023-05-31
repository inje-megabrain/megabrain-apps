# megabrain-apps

메가 브레인 Fronted 서비스를 모아두는 monorepo 입니다.

> git flow 전략을 일부 차용합니다.

## 구성

### 전역 의존성

- ESLint
- Typescript
- husky
- prettier

### Package

Apps (Shared Resource를 이용하여 개별적으로 동작하는 프로젝트들)

- @megabrain/club: 일반 사용자들에게 보여지는 Megabrain Web 입니다.

Shared (각각의 App에서 공통적으로 사용되는 Resource)

- @megabrain/ui: 공통적으로 사용되는 Component들을 관리합니다.
- @megabrain/core: API, Type, Interface 들을 관리합니다.
- @megabrain/eslint-config: 각각의 Project에서 상속되어 사용되는 eslint-config를 관리합니다.
- tsconfig: 각각의 Project에서 상속되어 사용되는 tsconfig를 관리합니다.

## 개발 환경 구성

### Git

버전 관리로 git을 사용하며, 원격 저장소로는 github를 이용하고 있습니다. (git이 없는 경우, 설치해주세요.)

다음 명령어를 통해 프로젝트를 내려받을 수 있습니다.

```sh
# 원하는 경로에서 cmd 또는 terminal을 연 다음
git clone https://github.com/inje-megabrain/megabrain-apps.git
# 또는 Submodule(Admin) 등이 포함된 프로젝트를 가져오려면 다음 명령어를 입력하세요
git clone --recurse-submodules https://github.com/inje-megabrain/megabrain-apps.git
```

> Submodule 프로젝트를 수정하는 경우 'Submodule 설정'을 참고해주세요

### Node (LTS 18.x.x)

설치 방법

- Window: [Node Homepage](https://nodejs.org/en)를 참조하세요.
- MacOS: [NVM](https://github.com/nvm-sh/nvm) 또는 [Homebrew](https://brew.sh/index_ko)을 통해 Node를 설치하는 것을 추천드립니다.

### Package Manager

설치 명령어 (Node 필요)

```sh
npm install -g yarn
```

> 주요 사항

- Yarn (>= 2.x, Berry)
- 해당 monorepo는 yarn workspace 만으로 구성되었습니다.
- 다만 안정성 위해, nodeLinker는 node_modules을 사용합니다.

### 초기 설정 및 실행

Node와 Yarn을 모두 설치한 경우, 다음 명령어를 입력하여 의존성을 설치해주세요.

```sh
# ! path: ~/megabrain-apps
yarn install
```

실행을 원하는 프로젝트 이름을 통해 다음과 같이 실행할 수 있습니다.

```sh
# ! @megabrain/club 을 실행하고 싶은 경우
yarn workspace @megabrain/club dev
# 또는
yarn workspace @megabrain/club start # @megabrain/club에서 다음 명령어는 실패합니다.
```

### 의존성 설정

**의존성 설정의 경우, 전체 구조에 오류를 초래할 수 있습니다. 신중하게 작업하세요.**

> workspace 전체에 의존성을 설정하는 경우

```sh
yarn add [dependency-name]
```

> 원하는 프로젝트에 의존성을 설정하는 경우

```sh
# 예시: yarn workspace @megabrain/ui add react
yarn workspace [projects-name] add [dependency-name]
```

### Storybook

**Storybook은 @megabrain/ui 에서 관리됩니다. (port: 6006)**

> Storybook 실행

```sh
yarn workspace @megabrain/ui storybook
```

> Storybook 빌드

```sh
yarn workspace @megabrain/ui build-storybook
```

## Submodule 설정

해당 설정은 Apps에 포함된 Submodule 프로젝트를 수정하는 경우 필요합니다. (다른 경우에는 설정 필요 없음)

[다음 글](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88)을 참조하여 작성되었습니다.

### Root 에서 Submodule Projects 수정사항 동시 적용하기

```sh
git config --global diff.submodule log
```

### Submodule 업데이트 사항 받아오기

```sh
# 아래 작성된 모든 명령어는 전체 root 에서 실행하면 됩니다.
# 전체 submodule 업데이트
git submodule update --remote
# 특정 프로젝트
# 예시 git submodule update --remote apps/admin
git submodule update --remote ['.gitmodules에 등록된 태그 명']
```
