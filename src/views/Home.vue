<template>
  <div class="home">
    <div class="main-pages">
      <div class="upper">
        <div class="A-UserAction-block">
          <a-steps progress-dot :current="current" class="custom-steps" size="small"
            direction="vertical">
            <a-step title="登录"></a-step>
            <a-step title="连接"></a-step>
            <a-step title="对源MySQL数据库执行read命令"></a-step>
            <a-step title="获取结果数据包"></a-step>
            <a-step title="对目的Hive数据库执行Load命令"></a-step>
            <a-step title="获取结果"></a-step>
            <a-step title="执行完成，断开连接"></a-step>
          </a-steps>
        </div>
        <div class="B-UserInformation-block">
          <div class="user-content">
            <svg width="40" height="40">
              <image :xlink:href="require(`@/assets/user-active.svg`)" width="100%" height="100%" />
            </svg>
            <div class="usual-text">{{data_json.username}}</div>
            <div class="usual-text">{{data_json.startTime}}</div>
            <svg class="arrow-line">
              <g>
                <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot0" r="5" fill="#1890FF">
                  <animateMotion dur="1s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-' + 0"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 0" d="M 150,0 L 150,20" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
          <div class="ip-content">
            <svg width="40" height="40">
              <image :xlink:href="require(`@/assets/desktop-active.svg`)" width="100%"
                height="100%" />
            </svg>
            <div class="usual-text">{{data_json.userip}}</div>
            <div class="arrow-line">
              <svg class="arrow-line">
                <g>
                  <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black"
                    marker-end="url(#arrowhead)" />
                  <circle v-if="showDot1" r="5" fill="#1890FF">
                    <animateMotion dur="1s" repeatCount="indefinite">
                      <mpath :href="'#line-path-' + 1"></mpath>
                    </animateMotion>
                  </circle>
                  <path :id="'line-path-' + 1" d="M 150,0 L 150,50" />
                </g>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                    orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="black" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="C-HiveOutput-block">
          <div class="command-content">
            <div class="command-box">
              <svg width="40" height="40">
                <image :xlink:href="require(`@/assets/result-active.svg`)" width="40" height="40" />
              </svg>
              <div class="text-box">
                <div>数据包编号：{{ data_json.dataPool.result.result_id }}</div>
                <div>大小: {{ data_json.dataPool.result.entryCnt }}</div>
                <div>条数：{{ data_json.dataPool.result.size }}</div>
                <div>耗时：{{ data_json.dataPool.result.WithTime }}</div>
                <div>具体信息：{{ data_json.dataPool.result.message }}</div>
              </div>
            </div>
          </div>
          <svg class="arrow-line">
            <line x1="65%" y1="150%" x2="65%" y2="0%" stroke="black" marker-end="url(#arrowhead)" />
            <circle v-if="showDot8" r="5" fill="#1890FF">
              <animateMotion dur="2s" repeatCount="indefinite" accumulate="none">
                <mpath :href="'#line-path-8'"></mpath>
              </animateMotion>
            </circle>
            <path :id="'line-path-' + 8" d="M 195,210 L 195,0" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="black" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      <div class="lower">
        <div class="A-Mysql-block">
          <div class="A-upper">
            <div class="mysql-content">
              <svg width="90" height="90">
                <image :xlink:href="require(`@/assets/database-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div class="usual-text">{{data_json.dataSourse.databaseName}}</div>
            </div>
            <svg class="arrow-line">
              <g>
                <line x1="100%" y1="30%" x2="0%" y2="30%" stroke="black"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot3" r="5" fill="#1890FF">
                  <animateMotion dur="1s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-' + 3"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 3" d="M 85,36 L 10,36" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
          <div class="A-lower">
            <svg class="arrow-line">
              <g>
                <polyline points="25,0 25,50 150,50" stroke="black" fill="none"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot4" r="5" fill="#1890FF">
                  <animateMotion dur="2s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-' + 4"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 4" d="M 25,0 L 25,50 L 150,50" fill="none" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        <div class="B-Read-block">
          <div class="command-content">
            <div class="command-box">
              <svg width="40" height="40">
                <image :xlink:href="require(`@/assets/sql-active.svg`)" width="40" height="40" />
              </svg>
              <div class="text-box">
                <div>对象：{{ data_json.dataSourse.tableName }}</div>
                <div>操作: {{ data_json.dataSourse.command }}</div>
                <div>完整指令：{{ data_json.dataSourse.arguments }}</div>
              </div>
            </div>
          </div>
          <div class="result-content">
            <div class="command-box">
              <svg width="40" height="40">
                <image :xlink:href="require(`@/assets/result-active.svg`)" width="40" height="40" />
              </svg>
              <div class="text-box">
                <div>数据包编号：{{ data_json.dataSourse.result.result_id }}</div>
                <div>大小: {{ data_json.dataSourse.result.entryCnt }}</div>
                <div>条数：{{ data_json.dataSourse.result.size }}</div>
                <div>具体信息：{{ data_json.dataSourse.result.message }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="C-Tool-block">
          <!-- upper -->
          <div class="C-upper">
            <!-- 连接左边的线 -->
            <svg class="arrow-line">
              <g>
                <line x1="100%" y1="30%" x2="0%" y2="30%" stroke="black"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot2" r="5" fill="#1890FF">
                  <animateMotion dur="1s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-' + 2"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 2" d="M 85,36 L 10,36" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
            <div class="tool-content">
              <svg width="90" height="90">
                <image :xlink:href="require(`@/assets/tool-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div class="usual-text">抽取工具</div>
            </div>
            <!-- 连接右边的线 -->
            <svg class="arrow-line">
              <g>
                <line x1="0%" y1="60%" x2="100%" y2="60%" stroke="black"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot6" r="5" fill="#1890FF">
                  <animateMotion dur="1s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-6'"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 6" d="M 0,72 L 75,72" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
          <div class="C-lower">
            <svg class="arrow-line">
              <g>
                <polyline points="0,55 152,55 152,0" stroke="black" fill="none"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot5" r="5" fill="#1890FF">
                  <animateMotion dur="2s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-5'"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-5'" d="M 0,55 L 152,55 L 152,0" fill="none" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        <div class="D-Load-block">
          <div class="command-content">
            <div class="command-box">
              <svg width="40" height="40">
                <image :xlink:href="require(`@/assets/upload-active.svg`)" width="40" height="40" />
              </svg>
              <div class="text-box">
                <div>分区：{{ data_json.dataPool.partition }}</div>
                <div>操作: {{ data_json.dataPool.command }}</div>
                <div>完整指令：{{ data_json.dataPool.arguments }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="E-Hive-block">
          <div class="hive-content">
            <svg class="arrow-line">
              <g>
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black"
                  marker-end="url(#arrowhead)" />
                <circle v-if="showDot7" r="5" fill="#1890FF">
                  <animateMotion dur="1s" repeatCount="indefinite" accumulate="none">
                    <mpath :href="'#line-path-7'"></mpath>
                  </animateMotion>
                </circle>
                <path :id="'line-path-' + 7" d="M 0,55 L 30,55" />
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
                  orient="auto">
                </marker>
              </defs>
            </svg>
            <svg width="90" height="90">
              <image :xlink:href="require(`@/assets/hive-active.svg`)" width="100%" height="100%" />
            </svg>
          </div>
          <div class="usual-text">{{data_json.dataPool.databaseName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from '../js/home.js';
export default Home;
</script>

<style scoped>
@import url('../style/home_index.css');
</style>