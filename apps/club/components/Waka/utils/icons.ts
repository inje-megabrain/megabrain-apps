export const formatSkillIconUrl = (skillNames: string[], max = 5) =>
  'https://skillicons.dev/icons?i=' +
  skillNames
    .reduce<string[]>((acc, sk) => {
      if (isKeyOfWakaSkillIcon(sk)) {
        acc.push(WakaSkillIconMap[sk]);
      }
      return acc;
    }, [])
    .slice(0, max)
    .join(',');

const isKeyOfWakaSkillIcon = (name: string): name is keyof typeof WakaSkillIconMap => {
  return name in WakaSkillIconMap;
};

export const WakaSkillIconMap = {
  Go: 'go',
  TypeScript: 'ts',
  Docker: 'docker',
  Javascript: 'js',
  Java: 'java',
  Kotlin: 'kotlin',
  C: 'c',
  'C++': 'cpp',
  'C#': 'cs',
  Html: 'html',
  React: 'react',
  Rust: 'rust',
  Tauri: 'tauri',
  Unity: 'unity',
  Unreal: 'unreal',
  'VS Code': 'vscode',
  Python: 'py',
  Dart: 'dart',
  Bash: 'bash',
  'Visual Studio': 'visualstudio',
} as const;
