interface DSTask {
  danger: 0 | 1 | 2 | 3
  sp: number
  packCount: number //关卡的包数，国际服即紫币数量
}

interface DSStage {
  stage: number
  sp: number // 当前关卡所有sp
  limit: number[] | string[]
  //spFinish: number //完成当前的sp，等于下一关解锁需要的sp
  tasks: DSTask[]
}

interface DSChapter {
  title: string
  chapter: number
  stages: DSStage[] // 本章每个阶段
  coinPerPack: number //本章每个包的福币数，国际服恒为1
}

interface DSData {
  chapters: DSChapter[]
  notes: string[]
}

export default DSData
