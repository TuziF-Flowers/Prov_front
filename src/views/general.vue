<template>
  <div id="general">
    <!-- <img src="@/assets/general.png" height="960px" /> -->
    <div class="pages">
      <div class="pages-left">
        <div class="job-detail">
          任务详情
          <div class="detail-text">
            <div class="detail-item">
              <div class="item-title">名称: </div>
              <div>卫健委门诊一件事抽取</div>
            </div>
            <div class="detail-item">
              <div class="item-title">编号: </div>
              <div>9026143131</div>
            </div>
            <div class="detail-item">
              <div class="item-title">执行时间: </div>
              <div>2024-04-03 06:33:09</div>
            </div>
            <div class="detail-item">
              <div class="item-title">设备IP: </div>
              <div>158.10.83.27</div>
            </div>
            <div class="detail-item">
              <div class="item-title">读取条数: </div>
              <div>223270</div>
            </div>
          </div>
        </div>
        <div class="node-detail">
          <div class="node-item">
            <div class="icon" style="border:3px solid #5B8FF9;background-color:#C6E5FF"></div>
            <div class="text" style="color:#5B8FF9">Dataworks</div>
          </div>
          <div class="node-item">
            <div class="icon" style="border:3px solid #2aa515;background-color:#cdedd5"></div>
            <div class="text" style="color:#2aa515">Reader——MySQL</div>
          </div>
          <div class="node-item">
            <div class="icon" style="border:3px solid #594d9c; background-color:#ced2e8"></div>
            <div class="text" style="color:#594d9c">Writer——Hive</div>
          </div>
        </div>
      </div>
      <div class="pages-center">
        <Event />
      </div>
      <div class="pages-right">
        <div class="log-item">
          <div class="log-title">DATAWORKS</div>
          <div class="log-content">
            2024-06-04 03:26:04 INFO Current task status:RUNNING<br>
            2024-06-04 03:26:04 INFO Start execute shell on node docker158123003070.<br>
            2024-06-04 03:26:04 INFO Current working dir<br>
            /home/admin/alisatasknode/taskinfo/20240604/phoenix/03/26/00/6s2bamwebrs5azan5as7a9rf<br>
            2024-06-04 03:26:04 INFO Full Command ..<br>
            2024-06-04 03:26:04 INFO -------------------------<br>
            2024-06-04 03:26:04 INFO /home/admin/synccenter/datasync.py<br>
            /home/admin/alisatasknode/taskinfo//20240604/phoenix/03/26/00/6s2bamwebrs5azan5as7a9rf//卫健委门诊一件事抽取
            bizdate=20240603<br>
            2024-06-04 03:26:04 INFO -------------------------<br>
            2024-06-04 03:26:04 INFO List of passing environment ..<br>
            2024-06-04 03:26:04 INFO -------------------------<br>
            2024-06-04 03:26:04 INFO SKYNET_PTYPE=23:<br>
            2024-06-04 03:26:04 INFO SKYNET_ACTIONID=1:<br>
            2024-06-04 03:26:04 INFO SKYNET_RERUN_MODE=1:<br>
            2024-06-04 03:26:04 INFO SKYNET_FLOW_PARAVALUE=:<br>
            2024-06-04 03:26:04 INFO SKYNET_ONDUTY=5269776781435852158:<br>
            2024-06-04 03:26:04 INFO SKYNET_SYSTEMID=:<br>
            2024-06-04 03:26:04 INFO SKYNET_SOURCEID=1:<br>
            2024-06-04 03:26:04 INFO SKYNET_PARAVALUE=bizdate=20240603:<br>
            2024-06-04 03:26:04 INFO SKYNET_TASKID=9026167461:<br>
            2024-06-04 03:26:04 INFO SKYNET_TENANT_ID=422150661562593:<br>
            2024-06-04 03:26:04 INFO SKYNET_ID=67093:<br>
            2024-06-04 03:26:04 INFO SKYNET_JOBID=301401593:<br>
            2024-06-04 03:26:04 INFO SKYNET_NODENAME=卫健委门诊一件事抽取:<br>
            2024-06-04 03:26:04 INFO SKYNET_CYCTYPE=0:<br>
            2024-06-04 03:26:04 INFO SKYNET_DSC_JOB_VERSION=6:<br>
            2024-06-04 03:26:04 INFO SKYNET_TASK_INPUT={}:<br>
            2024-06-04 03:26:04 INFO SKYNET_FLOWNAME=ATCLOUD_FLOW:<br>
            2024-06-04 03:26:04 INFO FILE_ID=67093:<br>
            2024-06-04 03:26:04 INFO SKYNET_TIMEZONE=Asia/Shanghai:<br>
            2024-06-04 03:26:04 INFO SKYNET_EXENAME=/home/admin/synccenter/datasync.py:<br>
            2024-06-04 03:26:04 INFO IS_NEW_SCHEDULE=true:<br>
            2024-06-04 03:26:04 INFO SKYNET_DAGTYPE=0:<br>
            2024-06-04 03:26:04 INFO FILE_VERSION=6:<br>
            2024-06-04 03:26:04 INFO SKYNET_SOURCENAME=sys_default:<br>
            2024-06-04 03:26:04 INFO SKYNET_SYSTEM_ENV=prod:<br>
            2024-06-04 03:26:04 INFO SKYNET_GMTDATE=20240604:<br>
            2024-06-04 03:26:04 INFO SKYNET_ENVTYPE=1:<br>
          </div>
        </div>

        <div class="log-item" style="background-color:#eaecfc">
          <div class="log-title" style="color:#594d9c">Reader: MySQL——General_log</div>
          <div class="log-content" style="height:200px">
            2024-06-04T03:26:26.656756+08:00 571655 Connect sjjc@158.123.3.69 on ods using
            SSL/TLS<br>
            2024-06-04T03:26:26.657978+08:00 571655 Query /* mysql-connector-java-5.1.46 ( Revision:
            9cc87a48e75c2d2e87c1a293b2862ce651cb256e ) */SELECT @@session.auto_increment_increment
            AS auto_increment_increment, @@character_set_client AS character_set_client,
            @@character_set_connection AS character_set_connection, @@character_set_results AS
            character_set_results, @@character_set_server AS character_set_server,
            @@collation_server AS collation_server, @@init_connect AS init_connect,
            @@interactive_timeout AS interactive_timeout, @@license AS license,
            @@lower_case_table_names AS lower_case_table_names, @@max_allowed_packet AS
            max_allowed_packet, @@net_buffer_length AS net_buffer_length, @@net_write_timeout AS
            net_write_timeout, @@sql_mode AS sql_mode, @@system_time_zone AS system_time_zone,
            @@time_zone AS time_zone, @@transaction_isolation AS transaction_isolation,
            @@wait_timeout AS wait_timeout<br>
            2024-06-04T03:26:26.659500+08:00 571655 Query SET NAMES utf8mb4<br>
            2024-06-04T03:26:26.660445+08:00 571655 Query SET character_set_results = NULL<br>
            2024-06-04T03:26:26.661358+08:00 571655 Query SELECT @@session.autocommit<br>
            2024-06-04T03:26:26.662821+08:00 571655 Query SET autocommit=0<br>
            2024-06-04T03:26:26.663736+08:00 571655 Query SET net_write_timeout=600<br>
            2024-06-04T03:26:26.667066+08:00 571655 Query select
            hex(aes_encrypt(XM,'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(ZJHM,'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(SJHM,'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(YLJGMC,'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(substr(JZKSRQ,1,19),'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(ZDMC,'f01a3b742641451597c8111b6c93d59b')),hex(aes_encrypt(JZKSMC,'f01a3b742641451597c8111b6c93d59b')),current_timestamp()
            from wjw_database.tb_yl_mz_medical_record_sq<br>
            2024-06-04T03:26:28.744688+08:00 570787 Quit <br>

          </div>
        </div>
        <div class="log-item" style="background-color:#e3ede5">
          <div class="log-title" style="color:#2aa515">Writer: Hive——HiverServer</div>
          <div class="log-content" style="height:200px">
            //compile<br>
            2024-06-04T03:26:54,240 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] operation.OperationManager: Adding operation:
            OperationHandle [opType=EXECUTE_STATEMENT,
            getHandleIdentifier()=a060bf42-7498-4524-aa52-c5a785387619]<br>
            2024-06-04T03:26:54,242 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] ql.Driver: Compiling
            command(queryId=hadoop_20240604032654_4d1bda78-6ed8-407b-96f8-90cb0abee7e5): LOAD DATA
            INPATH
            '/user/hive/warehouse/ods.db/ods_qwjw_ptqtjxt_medical_record_di__datax__14125cf0_b524_4d22_8f07_5e310a4b39d5/*'
            overwrite INTO TABLE ods_qwjw_ptqtjxt_medical_record_di PARTITION (dt='20240603')<br>
            2024-06-04T03:26:54,259 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] sqlstd.SQLStdHiveAccessController: Created
            SQLStdHiveAccessController for session context : HiveAuthzSessionContext
            [sessionString=aeb7b0a9-ea79-43ea-881e-3180cbd70f8c, clientType=HIVESERVER2]<br>
            #解析器：解析完成，解析过程中会在hdfs中访问源文件路径，在metastore中访问目的表<br>
            2024-06-04T03:26:54,394 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] ql.Driver: Semantic Analysis Completed<br>
            2024-06-04T03:26:54,394 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] ql.Driver: Returning Hive schema:
            Schema(fieldSchemas:null, properties:null)<br>
            #编译器：编译结束<br>
            2024-06-04T03:26:54,394 INFO [cf7be5dd-84a5-48c5-aba5-dc461c3a6430
            HiveServer2-Handler-Pool: Thread-10808241] ql.Driver: Completed compiling
            command(queryId=hadoop_20240604032654_4d1bda78-6ed8-407b-96f8-90cb0abee7e5); Time taken:
            0.152 seconds<br>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Event from '../components/provenance/event.vue';
export default {
  components: {
    Event,
  },
};
</script>
<style lang="scss" scoped>
#general {
  width: 2000px;
  height: 960px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
  .pages {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    height: 100%;
  }
  .pages-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    .job-detail {
      height: 200px;
      background-color: #e6e6e6;
      border: 1px solid #000;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      line-height: 40px;
      .detail-text {
        border-top: 1px solid #000;
        padding: 10px;
        text-align: left;
        font-weight: 500;
        line-height: 28px;
        .detail-item {
          display: flex;
          flex-direction: row;
          .item-title {
            border-right: 1px solid #000;
            margin-right: 10px;
            width: 80px;
            font-weight: 550;
          }
        }
      }
    }
    .node-detail {
      position: absolute;
      bottom: 100px;
      .node-item {
        display: flex;
        flex-direction: row;
        margin: 10px;
        .icon {
          width: 80px;
          height: 35px;
          border-radius: 7px;
        }
        .text {
          margin-left: 10px;
          line-height: 35px;
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
  }
  .pages-center {
    width: 600px;
    height: 100%;
  }
  .pages-right {
    flex: 4;
    padding-top: 30px;
    .log-item {
      margin-bottom: 20px;
      text-align: left;
      padding: 10px;
      margin-left: 50px;
      border: 1px solid #8a8a8a;
      background-color: #ecf6fc;
      border-radius: 5px;
      .log-title {
        font-weight: 600;
        color: #5b8ff9;
        font-size: 18px;
        line-height: 30px;
      }
      .log-content {
        border-top: 1px solid #8a8a8a;
        overflow-y: scroll;
        overflow-x: auto;
        height: 300px;
        width: 1040px;
      }
    }
  }
}
</style>
