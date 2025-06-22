export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '榴莲不进',
    avatar: '',
    username: 'nekomeowww',
    title: 'Nólëbase 原始创作者',
    desc: '学习者，专注于计算机知识的学习，数据分析，后端、音视频 开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/hahaha9090' },
//      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['nekomeowww', '榴莲不进', '榴莲不进', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
