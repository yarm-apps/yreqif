export const sample_xml = `
<?xml version="1.0" encoding="UTF-8"?>
<REQ-IF xmlns="http://www.omg.org/spec/ReqIF/20110401/reqif.xsd" xmlns:configuration="http://eclipse.org/rmf/pror/toolextensions/1.0" xmlns:headline="http://pror.org/presentation/headline" xmlns:id="http://pror.org/presentation/id" xmlns:linewrap="http://pror.org/presentation/linewrap">
  <THE-HEADER>
    <REQ-IF-HEADER IDENTIFIER="rmf-1678aca6-a5ab-43bd-8443-80a6cc547abc">
      <COMMENT>Created by: jastram</COMMENT>
      <CREATION-TIME>2012-10-04T11:20:04.015+02:00</CREATION-TIME>
      <REQ-IF-TOOL-ID>ProR (http://pror.org)</REQ-IF-TOOL-ID>
      <REQ-IF-VERSION>1.0.1</REQ-IF-VERSION>
      <SOURCE-TOOL-ID>ProR (http://pror.org)</SOURCE-TOOL-ID>
      <TITLE>ProR Versioning Support</TITLE>
    </REQ-IF-HEADER>
  </THE-HEADER>
  <CORE-CONTENT>
    <REQ-IF-CONTENT>
      <DATATYPES>
        <DATATYPE-DEFINITION-STRING IDENTIFIER="rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412" LONG-NAME="T_String32k" MAX-LENGTH="32000"/>
        <DATATYPE-DEFINITION-STRING IDENTIFIER="rmf-9600ed23-4190-494f-a6a2-fa6a674695b5" LONG-NAME="T_Headline"/>
        <DATATYPE-DEFINITION-STRING IDENTIFIER="rmf-72cfe6b6-3701-42e2-82fa-46b9dd2d9f6d" LONG-NAME="T_ID"/>
      </DATATYPES>
      <SPEC-TYPES>
        <SPEC-OBJECT-TYPE IDENTIFIER="rmf-a28bfb09-054d-4675-945a-4506334f0210" LONG-NAME="Requirement Type">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-b7184244-b774-406b-b944-1028d4f2ebdf" LONG-NAME="ID">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-72cfe6b6-3701-42e2-82fa-46b9dd2d9f6d</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-beadba58-b941-4275-847a-858fe9775249" LONG-NAME="Description">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-d3660490-efd6-4714-afe7-214683c484ec" LONG-NAME="Done">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46" LONG-NAME="Actors">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab" LONG-NAME="Comment">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
        <SPECIFICATION-TYPE IDENTIFIER="rmf-b1be7c4f-1b05-43c4-bab1-40cd861a9401" LONG-NAME="Specification Type">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-191af3ef-35c1-470c-a5f6-a9e9beb7be89" LONG-NAME="Description">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
          </SPEC-ATTRIBUTES>
        </SPECIFICATION-TYPE>
        <SPEC-OBJECT-TYPE IDENTIFIER="rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1" LONG-NAME="Headline Type">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725" LONG-NAME="Description">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>rmf-9600ed23-4190-494f-a6a2-fa6a674695b5</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
      </SPEC-TYPES>
      <SPEC-OBJECTS>
        <SPEC-OBJECT IDENTIFIER="rmf-40498c1d-d74c-47ed-a7fb-6123fe9a54e1">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="As part of ProR essentials, we will implement versioning support for ProR.  This document gathers requirements and describes the relevant use cases.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-1">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-13d02403-7934-469c-af99-88b91cc2b908">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Versioning for ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-87278cd7-7d68-4150-a63d-b8c9c5da7b9a">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="General Requirements">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b81c01be-7137-4917-b820-5297a673e049">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Once configured, users do not need (but may) to take action to manage the data in the repository.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-2">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-a75f2982-66d5-40d0-bf23-1bc2d5868da1">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Architectural Decisions">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-14e1256c-fd53-442a-b70a-4224610888f1">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="A preliminary analysis of available technologies revealed the following four technologies:">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-3">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-253b29e7-0e89-45c7-b304-7373ed8f40b5">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="EMF-Compare: A Diff/Merge tool.  Interoperates with several version stores (svn, git, etc.).  We have experience thanks to the Camille Editor for Rodin.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-4">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-1b8323fd-4d40-4e48-98e8-dd1d275446df">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="EMF Store: Requires its own Repository, but ships with powerful GUIs.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-5">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-891c6e7a-e8ca-4260-b377-82196c617ca8">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ReqIF Server: While ReqIF server provides a number of attractive features, especially with respect to versioning, it does provide an Eclipse-based Diff/Merge UI.  In addition, it is a commercial product which makes it difficult to offer as part of Essentials.  Last, the creation of an adapter would require a significant amount of work.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-6">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-1d80e46a-686b-4ed5-b90c-473e82bfba77">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="EMF Diff/Merge: An alternative engine, using the EMF Compare GUI.  Worrysome is the low activity.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-7">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-41ecb34f-151f-4eed-981f-13571c5b97a2">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Must manage embedded files.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-8">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-1962f858-6260-4a9f-bc0d-ddc5b194a1d6">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="At this point, EMF Compare seems to be the technology of choice: We have experience working with it, and we can produce results quickly.  In addition, it offers a lot of flexibility, as it is not tied to a repository technology.  An issue could be performance.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-9">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-638957c2-2ff3-40af-8528-6aa5eff7cf77">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Opening a project / Launching ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-9b797ba7-a80e-4155-8fbd-4d940ba5bd81">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user opens a project. Open a project means ...">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-10">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-10633465-1fc5-4232-99dc-9d9e58a79e57">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR gives the user the the option to answer yes/no, and to mark that as the default, in which case the question will not be posed any more for that project.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-11">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-1c09a823-de3c-4220-a45f-3c352b33b502">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If multiple projects are being opened at the same time (for instance, upon launching ProR), the question is posed for every project.  We should consider aggregating these requests into one UI.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-12">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-97758112-e5ea-423d-9e1a-d9fa261daf72">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If a merge conflict happens: ProR informs the user. The Project View will show the conflict information, and users will have to take action to resolve the conflict.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-13">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-722c3394-599b-43b0-ac3e-7bb509f6b785">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user closes a project. Closing a project means ...">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-14">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-1560e970-9ce2-4e6a-a83e-6c83dbfcfd2e">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Closing a project / Closing ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-40b5b744-8536-4055-8069-e7770454d97c">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Users have the option to answer yes/no, and to mark that as the default, in which case the question will not be posed any more for that project.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-15">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ae91c3d5-9c8d-480b-8a32-9a4d295c7a5c">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Before doing the push, the system will perform a pull, which may result in a merge conflict.  In that case, ProR informs the user and gives the option to close the project anyway, or to cancel, so that the conflicts can be resolved.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-16">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-eb67a0c1-6b82-43b1-9f80-58c863976fc9">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Save Actions (Deprecated!?)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-7d581392-bcf5-4adf-b464-de14f06705ee">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Users are given the option to configure save action on a per-project basis:">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-17">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-fd9179e1-85a4-485e-bb66-2e6ee2c7ad80">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(1) Perform a pull/update upon save">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-18">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ea10b1ff-3469-4ddc-8603-f87b59add854">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(2) Perform a push upon save.  In that case, it will be preceeded by a mandatory pull.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-19">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ac8343ff-de66-4ab5-ba11-13ac7164b1dd">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR adds automatically (the command &quot;add&quot; of the specific version management system in order to add the change to the next commit) new files (reqif files as well as external files like word, excel documents, etc.)  in the project into the repository. ">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-20">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-2bf9884c-f369-4055-ade9-729f3bde0ff4">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Inspect History">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-023be290-9b3a-4ba9-beae-9840f9a63cb8">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The repository's Hsitory Viewer is used for inspecting the History.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-21">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-09aea8bf-23fd-475f-85ff-00d1a7c3f82f">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="It has to be ensured that the ProR Diff tool is launched, when a comparision is requested.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-22">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b45bb51a-427e-4216-bccd-6d56053b1c33">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Compare Models">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-62200342-be03-4141-8acb-40f5e3bda48a">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Three GUIs for comparing are conceivable.  Which ones will be implemented is not clear yet.  These are:">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-23">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-98fe6ee3-ce58-4b5d-8323-cc2a7eba6d52">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(1) Compare by ReqIF model structure: Such a tool would use the ReqIF structure (rather than the ones used in the GUI) to compare models.  That means that changes in a SpecObject's value do NOT appear in the Specification, but in the ReqIFContent.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-24">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-a8c133c3-a37c-4e99-b896-d6968bae44e7">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(2) Simplified Compare Specifications: This would be a side-by-side view of the Specifications.  An idea is to only show those Columns that hold Attributes that actually changed.  This would be intuitive and useful, but would not show changes to the Datatypes and other aspects of the model.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-25">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-945606f0-df26-49cc-81b3-a58df782c070">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(3) List of changes: This view would state, as a list, all the changes between models.  This could be useful when there are only a few changes.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-26">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-531076fd-37dc-4370-87fe-8c661ba93793">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Merge Models">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-9d0f04c0-af39-4ff8-9c39-ebe4d9181ce3">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="This GUI would provide a three-way comparison that allows to cherry-pick changes.  It would be based on the ReqIF Model.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-27">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b4aea035-0ee5-456a-a29e-17b1d11d3c64">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="While EMF Compare evaluated so far we identified that there is no integrated support for resolving conflicts from a versioning system like Subversion and GIT. However, EMF Compare supports already a three-way-merge that can be used programmatically. For instance, subversion generates in case of a merge conflict three different files (base, version1 and version2) which can be used for feeting the three-way-merge mechanism of EMF Compare. However, there are several other things that have to be considered:&#xD;&#xA;&#xD;&#xA;- Subversion adds markers in the original file (this leads to errors when opening the file, cause the XML structure is not well formed anymore)&#xD;&#xA;- If using the three-way-merge mechanism from EMF compare we have to port the merged one to the original one&#xD;&#xA;- Starting the three-way-merging should be transparent for the user, this means that the tool should autoamtically start the merge with the three different files generated by subversion">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-28">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-12e6021c-0cdb-4752-8afd-90cfcce68129">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Since, the most version stores follows a different mechanism for instance for commands like checkout, commit, add etc.,, we have decided that the tool shall provide an interface for implementing different version stores">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-29">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-db4dd29b-3887-4e42-ac7c-56174f4b5576">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="TODO">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b8284feb-2f0d-4b7b-8e2d-2f9f737b2167">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-30">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="This is a list of tasks for the end of octobre (the first tasks are to be prioritized)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-91f99fd4-0b90-4200-8aa3-e74f322cc1ed">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-31">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Adapt the match engine of EMF Compare (for instance that the engine compares the IDs of specific ReqIF elements)&#xD;&#xA;&#xD;&#xA;Furthermore ... &#xD;&#xA;- We should try to ignore the ordering of specobjects (when changed)&#xD;&#xA;- We should ignore the las modified date attribute (when changed)&#xD;&#xA;&#xD;&#xA;In addition, we should create a catalogue of items with irrelevant differences and acceptable differences">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ca92c5b1-c006-4cb1-83d6-92d75ea2cc59">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-32">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Remove dialog that always popups then comparing two ReqIF files (nerved)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-621e3cd7-814e-472a-bd07-765fcc5913d0">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-33">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Adapt icons in item providers --> Take icons from the original ProR plugin (org.eclipse.rmf.pror.reqif10.edit)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-d3fe4819-e327-4f92-bb7d-717cfc4dc81a">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-34">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Implement save, open, close use cases (automatic syncronization with repository). This task includes to create a clean interface for the different version management systems.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b3a70308-694e-4f43-92a9-79766893a914">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-35">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Support diff of external files in compare/diff view">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-e1107e09-2c46-492c-a335-1656108b1ba2">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-36">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Implement three-way-mergin of subversion generated conflicts">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-87821982-73c2-4c91-a1eb-abe14924e2c0">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question: What commit message should be used, or should the user have the option to enter a custom commit message?">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-37">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question -> see comment">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Good quesiton.  This is one of those things that can easily be extended later.  So maybe we should break this into two requirements: (1) The ability to do this in the first place, and (2) the customization of the commit message.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-7191d122-1cfd-4f95-bee6-81ed0183e19a">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question: Should we show a message which informs the user which projects were updated anyway (although the user marked the update mechanism as default)?">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-38">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question (!)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-604f8324-6e1f-401a-80d6-d4ac0b1188a4">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question: Save action in the specification editor (reqif files). What is with external files which are related to the reqif project?">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-40">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question -> see comment">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="I'd argue that this applies to all files in the project.  It may be possible to register a project listener for this.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-83bebf20-f29f-4e29-a79a-7f731ce89a6f">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(1) The user launchs ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-41">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ed063871-2079-402f-b691-a836f05d343c">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(2) The user opens manually a project via right clickt -> Open Project (as a consequence the project must be closed before!)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-42">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-3d76a307-6334-4b82-b95a-76c897bd4146">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(1) The user closes ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-43">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-3a3ed445-66f4-4ef9-91f5-cbfdb68f0bad">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(2) The user closes manually a project via right clickt -> Close Project (as a consequence the project must be opened before!)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-44">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-597217d9-dabf-4b16-bf62-4e4d84b4c59e">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If multiple projects are being closed at the same time (for instance, upon closing ProR), the question is posed for every project.  We should consider aggregating these requests into one UI.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-46">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-faf271d4-f47c-4b7f-9b47-3ec68fc23930">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Add Files to Project">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-92f12d1a-d475-40f9-8299-a44659fab0d8">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user adds a new file to the project. Adding a new file means ...">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-48">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b359cb8e-b073-410f-bd4a-c54c6ee98718">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(1) The user adds a new external file (for instance a word file, image file, etc.) to the project">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-49">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-d12b4951-ab4e-4b3f-b453-a4cba7f11caf">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(2) The user creates a new ReqIF File in the project">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-50">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-647f3e3e-6d42-496f-9532-54f01b7a25fb">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR asks the user whether the local files should be updated from the repository first">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-51">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ac745057-a507-4ce2-92ad-15c6394f7df6">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If local changes exist: ProR asks the user whether the local changes should be committed to the repository.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-54">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-73276d4b-77bd-4522-9ee8-ce6254ee33b8">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Closing a ReqIF file">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-8d9c835c-045f-4604-8a37-adc4d5bc763b">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-55">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user closes a ReqIF File. Closing means, that the user closes the Specification Editor.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-f2e428bb-effe-40ce-a8d4-0a83f6d8bbaf">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-56">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR check whether the ReqIF model was changed by the user.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-e4011fc6-4de4-45ba-83d4-5a24448cc0ba">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-57">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If local changes exist: ProR asks the user whether the local changes should be committed to the repository. In this case the whole project which includes the affected ReqIF file will be commited.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-90cd1cbc-7936-4184-bfb1-5e00e742f0ab">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-58">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="> see comment">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Before doing the commit, the system will perform an update, which may result in a merge conflict.  In that case, ProR informs the user.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Same approach as suggested for REQ-60 could be used.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-ca2f3f39-a63a-4218-bcd1-5fa549dbfe43">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-59">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="If multiple ReqIF files are being closed at the same time (for instance, via the action &quot;Close all&quot;), the question is posed for every project which includes the affected ReqIF file. If for instance two files of the same project are closed at the same time, the question is only posed one time for the project. We should consider aggregating these requests into one UI.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-a9d06119-ec50-424c-88f1-3689491d15e7">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-60">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question (!) -> see comment">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question: What commit message should be used, or should the user have the option to enter a custom commit message?">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="(mj) One option would be to show this in a view.  If the view is hidden, make it visible.  I was hoping that we could reuse a standard view from Eclipse, but I could not find one that's appropriate.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b0490b50-064e-47c4-9cfd-d7c5542cb417">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-61">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user has always the option to change this setting via the project properties (right click on project -> Properties)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-a255285e-0299-4ee8-b369-ae7b7cfbead7">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-62">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Done">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user has every time the option to change this setting via the project properties (right click on project -> Properties)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b6b57166-c31b-4b99-9960-1d62771e108f">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-63">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user has always the option to change this setting via the project properties (right click on project -> Properties)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-f979e6ee-410f-4064-9917-057edea63d89">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-64">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question (!)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Question: What commit message should be used, or should the user have the option to enter a custom commit message?">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-82d198ff-264b-4d8c-8565-216cea7ee96f">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-65">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The user has always the option to change this setting via the project properties (right click on project -> Properties)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="User">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-5192a2f2-ecd9-4db9-b9cf-5d4884a5e01d">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Use Case: Enable a project for Versioning">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-5d437425-7b8f-48d6-a8b9-4aa8fe333725</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-18783e02-ba04-46ba-92ce-b30e9fa753d1</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-c03d308d-d12b-448d-9da1-af99a86f878d">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="There is a project option (context menu?) to enable versioning for a project">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-66">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-bdb6dfdf-aed8-4a75-a163-523720f9b9f3">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Once triggered, a wizard starts.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-67">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-b14530cf-89c4-45df-b25f-48ecb151a767">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Optional: If the project is not yet managed by subversive, help the user configure subversive (for instance, by launching the subversive wizard, if launching a wizard from a wizard is possible...)">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-68">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-d78696a2-d411-40e1-9884-431386e701df">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Allow the user to configure the plugin's behavior.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-69">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="rmf-22e0c6bb-19e1-4e46-b0be-ab6a3af50b33">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Once completed, the Versioning function is enabled for the project">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-beadba58-b941-4275-847a-858fe9775249</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="REQ-70">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-b7184244-b774-406b-b944-1028d4f2ebdf</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-f50032f9-6939-43a5-90d8-b9fbde0880ab</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-c4c3e5e3-b543-4865-b6f2-0c423b88ed46</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-STRING>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-d3660490-efd6-4714-afe7-214683c484ec</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>rmf-a28bfb09-054d-4675-945a-4506334f0210</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
      </SPEC-OBJECTS>
      <SPEC-RELATIONS/>
      <SPECIFICATIONS>
        <SPECIFICATION IDENTIFIER="rmf-e962d7df-ab45-41f4-bcf5-135df1f714e2" LONG-NAME="Specification Document">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="ProR Versioning Support">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-191af3ef-35c1-470c-a5f6-a9e9beb7be89</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPECIFICATION-TYPE-REF>rmf-b1be7c4f-1b05-43c4-bab1-40cd861a9401</SPECIFICATION-TYPE-REF>
          </TYPE>
          <CHILDREN>
            <SPEC-HIERARCHY IDENTIFIER="rmf-ece3c1d3-0344-40e2-8cda-a5a9e12fc5f1">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-13d02403-7934-469c-af99-88b91cc2b908</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-725cb601-3274-47b9-a4e5-19874b3efbe6">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-40498c1d-d74c-47ed-a7fb-6123fe9a54e1</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-6581f395-ccaf-4e27-9eeb-397dc86abfde">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-87278cd7-7d68-4150-a63d-b8c9c5da7b9a</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-0044522f-f92e-43d5-8096-b1b0297dacb9">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-b81c01be-7137-4917-b820-5297a673e049</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-12aa8f05-3f70-449b-9c53-a9f6d930f43e">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-41ecb34f-151f-4eed-981f-13571c5b97a2</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-fc186616-e5c3-49d9-92a1-01cf4fa033a0">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-a75f2982-66d5-40d0-bf23-1bc2d5868da1</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-fba48cf8-c57a-44a1-9f01-506ad7292ea7">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-14e1256c-fd53-442a-b70a-4224610888f1</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-921a1853-d826-43da-b0a0-bf3c95eaec9a">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-253b29e7-0e89-45c7-b304-7373ed8f40b5</SPEC-OBJECT-REF>
                      </OBJECT>
                      <CHILDREN>
                        <SPEC-HIERARCHY IDENTIFIER="rmf-dc62c17d-7285-4efe-a6c2-95fac741c93d">
                          <OBJECT>
                            <SPEC-OBJECT-REF>rmf-12e6021c-0cdb-4752-8afd-90cfcce68129</SPEC-OBJECT-REF>
                          </OBJECT>
                        </SPEC-HIERARCHY>
                      </CHILDREN>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-807eb4e9-6ac8-4793-a11e-928df8d06dc0">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-1d80e46a-686b-4ed5-b90c-473e82bfba77</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-01944ac5-6981-41d9-8ea0-e0fb500a1fee">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-1b8323fd-4d40-4e48-98e8-dd1d275446df</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-20351f21-fe6e-41e0-81c2-b7c5e67a9885">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-891c6e7a-e8ca-4260-b377-82196c617ca8</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-b8767747-08e2-4060-8812-3c048bbf9992">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-1962f858-6260-4a9f-bc0d-ddc5b194a1d6</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-5ebdc6bf-090e-4055-88a2-4051f84269e2">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-b4aea035-0ee5-456a-a29e-17b1d11d3c64</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-08470d98-d371-4da2-8645-8af1569ff271">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-638957c2-2ff3-40af-8528-6aa5eff7cf77</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-d4e7ba1c-6547-4682-8620-06d542a8f512">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-9b797ba7-a80e-4155-8fbd-4d940ba5bd81</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-03f4c7f6-bda7-44dd-bd39-0b0904e50678">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-83bebf20-f29f-4e29-a79a-7f731ce89a6f</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-2418d536-c412-43e2-9e60-8e6999c551c9">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-ed063871-2079-402f-b691-a836f05d343c</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-b33fafdc-62d2-4746-b115-d39c70d12efc">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-647f3e3e-6d42-496f-9532-54f01b7a25fb</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-8627a5ff-7529-4114-8494-767de895b3b7">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-10633465-1fc5-4232-99dc-9d9e58a79e57</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-285b554b-edac-4aa1-9606-ee57452479a7">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-1c09a823-de3c-4220-a45f-3c352b33b502</SPEC-OBJECT-REF>
                      </OBJECT>
                      <CHILDREN>
                        <SPEC-HIERARCHY IDENTIFIER="rmf-cdbb6b65-0481-4c90-a70d-fddb6ba55346">
                          <OBJECT>
                            <SPEC-OBJECT-REF>rmf-7191d122-1cfd-4f95-bee6-81ed0183e19a</SPEC-OBJECT-REF>
                          </OBJECT>
                        </SPEC-HIERARCHY>
                      </CHILDREN>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-d72bb9b9-f82a-4585-8a17-b2ec72950255">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-97758112-e5ea-423d-9e1a-d9fa261daf72</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN/>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-cb658f85-1893-428a-a98b-a50d2f52eedb">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-a255285e-0299-4ee8-b369-ae7b7cfbead7</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-0d35bbda-84ed-45b1-8c8d-7198bc5b5935">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-1560e970-9ce2-4e6a-a83e-6c83dbfcfd2e</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-95e2e600-cbe7-457c-8c01-9a81e241dc9a">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-722c3394-599b-43b0-ac3e-7bb509f6b785</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-5003f123-56f2-43f9-8bea-88ab34d0d75d">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-3d76a307-6334-4b82-b95a-76c897bd4146</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-5dc1c264-6eed-4dd2-855c-f78e3fece2d6">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-3a3ed445-66f4-4ef9-91f5-cbfdb68f0bad</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-4d8816f0-a080-4830-b18a-5b8ec1c91274">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-ac745057-a507-4ce2-92ad-15c6394f7df6</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-7efb7f32-5c7f-45dc-aa0f-be90973edc06">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-40b5b744-8536-4055-8069-e7770454d97c</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-fe5f6d0e-07b2-4433-83d9-50169d1171bf">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-597217d9-dabf-4b16-bf62-4e4d84b4c59e</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-4e9b42e7-7ef3-4f7a-9b1d-09fa6cebc48c">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-f979e6ee-410f-4064-9917-057edea63d89</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-c94c3adc-0c27-4153-b943-5aeb320747ba">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-ae91c3d5-9c8d-480b-8a32-9a4d295c7a5c</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-120bfbcf-a666-4427-8c79-71c26ae4d4b3">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-b0490b50-064e-47c4-9cfd-d7c5542cb417</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-da5b08f3-49db-447b-9664-d379c0891528">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-73276d4b-77bd-4522-9ee8-ce6254ee33b8</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-73a5b032-88af-4f2b-845d-5636083ec33b">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-8d9c835c-045f-4604-8a37-adc4d5bc763b</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-70c37d61-5683-4747-b97a-d0ef35583133">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-f2e428bb-effe-40ce-a8d4-0a83f6d8bbaf</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-7db92966-efca-4746-bf7a-f6aaa8024eca">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-e4011fc6-4de4-45ba-83d4-5a24448cc0ba</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-db56a2cb-101d-4cb5-93d7-5dd06fe52114">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-ca2f3f39-a63a-4218-bcd1-5fa549dbfe43</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-25832b42-f77f-451c-af65-9689f97c6c40">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-a9d06119-ec50-424c-88f1-3689491d15e7</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-5402b2b1-216f-4017-8754-50f1eba35ac6">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-90cd1cbc-7936-4184-bfb1-5e00e742f0ab</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-8f857448-8d81-46eb-8e18-fae72c5c5ceb">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-b6b57166-c31b-4b99-9960-1d62771e108f</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-7c2f56b9-b45f-4187-9df6-481280c2b886">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-faf271d4-f47c-4b7f-9b47-3ec68fc23930</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-831b63ff-4204-4d3d-8b53-ea72a0c02d55">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-92f12d1a-d475-40f9-8299-a44659fab0d8</SPEC-OBJECT-REF>
                      </OBJECT>
                      <CHILDREN>
                        <SPEC-HIERARCHY IDENTIFIER="rmf-79184c04-87ed-44fb-a012-eacc9e74049a">
                          <OBJECT>
                            <SPEC-OBJECT-REF>rmf-b359cb8e-b073-410f-bd4a-c54c6ee98718</SPEC-OBJECT-REF>
                          </OBJECT>
                        </SPEC-HIERARCHY>
                        <SPEC-HIERARCHY IDENTIFIER="rmf-35b3f875-141a-4c4c-ae42-0f8450b4571e">
                          <OBJECT>
                            <SPEC-OBJECT-REF>rmf-d12b4951-ab4e-4b3f-b453-a4cba7f11caf</SPEC-OBJECT-REF>
                          </OBJECT>
                        </SPEC-HIERARCHY>
                      </CHILDREN>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-5463f100-d6af-4059-98fb-2e6ac8654cb6">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-ac8343ff-de66-4ab5-ba11-13ac7164b1dd</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-44fa192a-cf30-40c0-a923-a20f8aa537e2">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-82d198ff-264b-4d8c-8565-216cea7ee96f</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-748422b0-2c2d-4643-a785-d3499b4e8736">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-2bf9884c-f369-4055-ade9-729f3bde0ff4</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-98627300-2b7f-4cd8-86c7-bf97b6c85f79">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-023be290-9b3a-4ba9-beae-9840f9a63cb8</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-e59e00e8-9c99-4e59-905b-0113e5064108">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-09aea8bf-23fd-475f-85ff-00d1a7c3f82f</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-2e4b16ae-af96-4c55-8cf1-83aa0896434c">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-b45bb51a-427e-4216-bccd-6d56053b1c33</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-f87ef7ae-d545-4d2b-ba39-09de648c6fbb">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-62200342-be03-4141-8acb-40f5e3bda48a</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-9f74c62f-169d-4908-bbd2-e41459935845">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-98fe6ee3-ce58-4b5d-8323-cc2a7eba6d52</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-5ab23ddc-a1cc-4af4-8a9d-8f168a015be2">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-a8c133c3-a37c-4e99-b896-d6968bae44e7</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-0f2523bb-96f4-4f36-950e-4b74a4064dae">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-945606f0-df26-49cc-81b3-a58df782c070</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-4de47f24-20cb-4553-8646-35c60512924d">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-531076fd-37dc-4370-87fe-8c661ba93793</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-349a0353-2e33-4326-81d6-eb64b60cbd43">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-9d0f04c0-af39-4ff8-9c39-ebe4d9181ce3</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-b8cb5b61-161b-4738-8a8f-2f1b06a26a79">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-eb67a0c1-6b82-43b1-9f80-58c863976fc9</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-03566082-2973-41d1-85ac-30dc693f21fd">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-7d581392-bcf5-4adf-b464-de14f06705ee</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-f24f7b9d-530c-4788-b291-cff9663490af">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-604f8324-6e1f-401a-80d6-d4ac0b1188a4</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-9c2156d5-ca49-4c3e-b9bf-f9ec410dcba1">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-fd9179e1-85a4-485e-bb66-2e6ee2c7ad80</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-db07d888-c058-4fc4-8a98-4a0c950d3553">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-ea10b1ff-3469-4ddc-8603-f87b59add854</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-4b68cbc1-863c-4bcf-8725-d7cc78c756ad">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-87821982-73c2-4c91-a1eb-abe14924e2c0</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
            <SPEC-HIERARCHY IDENTIFIER="rmf-f5994240-57fb-42c3-a95b-1670b11fe971">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-5192a2f2-ecd9-4db9-b9cf-5d4884a5e01d</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-aabd3040-ff74-4af8-83d2-6da1ea1fc6f8">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-c03d308d-d12b-448d-9da1-af99a86f878d</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-f4e52006-13cb-4996-a0bd-5c499551e008">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-bdb6dfdf-aed8-4a75-a163-523720f9b9f3</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-51343573-5167-4e22-a2ce-c75e8798189a">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-b14530cf-89c4-45df-b25f-48ecb151a767</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-52d3eb39-e764-4931-9497-6ea6352099e6">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-d78696a2-d411-40e1-9884-431386e701df</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
                <SPEC-HIERARCHY IDENTIFIER="rmf-8868340c-f18c-41d4-9810-5ac651ea0d20">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-22e0c6bb-19e1-4e46-b0be-ab6a3af50b33</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
          </CHILDREN>
        </SPECIFICATION>
        <SPECIFICATION IDENTIFIER="rmf-18a7243e-f39d-4356-a155-76ead45e4a45">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Todo">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>rmf-191af3ef-35c1-470c-a5f6-a9e9beb7be89</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
          </VALUES>
          <TYPE>
            <SPECIFICATION-TYPE-REF>rmf-b1be7c4f-1b05-43c4-bab1-40cd861a9401</SPECIFICATION-TYPE-REF>
          </TYPE>
          <CHILDREN>
            <SPEC-HIERARCHY IDENTIFIER="rmf-107be20d-aa9c-4c8f-912a-0adb8cb3c7ba">
              <OBJECT>
                <SPEC-OBJECT-REF>rmf-db4dd29b-3887-4e42-ac7c-56174f4b5576</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="rmf-01eecc13-28db-42a4-b49f-80d2bd597cea">
                  <OBJECT>
                    <SPEC-OBJECT-REF>rmf-b8284feb-2f0d-4b7b-8e2d-2f9f737b2167</SPEC-OBJECT-REF>
                  </OBJECT>
                  <CHILDREN>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-3efe36cb-68fe-44db-9beb-19a87317c077">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-91f99fd4-0b90-4200-8aa3-e74f322cc1ed</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-e3842061-2b2b-4154-8c80-da22b8111877">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-ca92c5b1-c006-4cb1-83d6-92d75ea2cc59</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-24774d15-5f4e-4bc8-bf55-00673dda18b8">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-d3fe4819-e327-4f92-bb7d-717cfc4dc81a</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-f7779e82-7700-4e33-9c06-0a9fa8c08319">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-b3a70308-694e-4f43-92a9-79766893a914</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-fc2e8078-ccb8-4028-95eb-b9970e570921">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-621e3cd7-814e-472a-bd07-765fcc5913d0</SPEC-OBJECT-REF>
                      </OBJECT>
                      <CHILDREN/>
                    </SPEC-HIERARCHY>
                    <SPEC-HIERARCHY IDENTIFIER="rmf-a42bc6b6-916a-4490-9943-741d2c57a479">
                      <OBJECT>
                        <SPEC-OBJECT-REF>rmf-e1107e09-2c46-492c-a335-1656108b1ba2</SPEC-OBJECT-REF>
                      </OBJECT>
                    </SPEC-HIERARCHY>
                  </CHILDREN>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
          </CHILDREN>
        </SPECIFICATION>
      </SPECIFICATIONS>
      <SPEC-RELATION-GROUPS>
        <RELATION-GROUP IDENTIFIER="rmf-f041ae1c-9101-415b-b2b9-2ca37b4b789c"/>
      </SPEC-RELATION-GROUPS>
    </REQ-IF-CONTENT>
  </CORE-CONTENT>
  <TOOL-EXTENSIONS>
    <REQ-IF-TOOL-EXTENSION>
      <configuration:ProrToolExtension>
        <configuration:specViewConfigurations>
          <configuration:ProrSpecViewConfiguration configuration:specification="rmf-e962d7df-ab45-41f4-bcf5-135df1f714e2">
            <configuration:columns>
              <configuration:Column configuration:label="ID" configuration:width="147"/>
              <configuration:Column configuration:label="Actors"/>
              <configuration:Column configuration:label="Description" configuration:width="776"/>
              <configuration:Column configuration:label="Done" configuration:width="105"/>
            </configuration:columns>
            <configuration:leftHeaderColumn>
              <configuration:Column configuration:label="Lead Header Column" configuration:width="30"/>
            </configuration:leftHeaderColumn>
          </configuration:ProrSpecViewConfiguration>
          <configuration:ProrSpecViewConfiguration configuration:specification="rmf-18a7243e-f39d-4356-a155-76ead45e4a45">
            <configuration:columns>
              <configuration:Column configuration:label="ID" configuration:width="138"/>
              <configuration:Column configuration:label="Description" configuration:width="499"/>
            </configuration:columns>
            <configuration:leftHeaderColumn>
              <configuration:Column configuration:label="Lead Header Column" configuration:width="57"/>
            </configuration:leftHeaderColumn>
          </configuration:ProrSpecViewConfiguration>
        </configuration:specViewConfigurations>
        <configuration:generalConfiguration>
          <configuration:ProrGeneralConfiguration>
            <configuration:labelConfiguration>
              <configuration:LabelConfiguration>
                <configuration:defaultLabel>Description</configuration:defaultLabel>
              </configuration:LabelConfiguration>
            </configuration:labelConfiguration>
          </configuration:ProrGeneralConfiguration>
        </configuration:generalConfiguration>
        <configuration:presentationConfigurations>
          <configuration:ProrPresentationConfigurations>
            <configuration:presentationConfigurations>
              <linewrap:LinewrapConfiguration configuration:datatype="rmf-b5fbda6b-a81e-43c6-b68d-d0e14222c412"/>
              <headline:HeadlineConfiguration configuration:datatype="rmf-9600ed23-4190-494f-a6a2-fa6a674695b5"/>
              <id:IdConfiguration configuration:datatype="rmf-72cfe6b6-3701-42e2-82fa-46b9dd2d9f6d" id:count="70"/>
            </configuration:presentationConfigurations>
          </configuration:ProrPresentationConfigurations>
        </configuration:presentationConfigurations>
      </configuration:ProrToolExtension>
    </REQ-IF-TOOL-EXTENSION>
  </TOOL-EXTENSIONS>
</REQ-IF>
`;

export const sample_xml1 = `
<?xml version="1.0" encoding="UTF-8"?>
<REQ-IF xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.omg.org/spec/ReqIF/20101201" xsi:schemaLocation="http://www.omg.org/spec/ReqIF/20110401/reqif.xsd reqif.xsd http://www.w3.org/1999/xhtml driver.xsd">
  <THE-HEADER>
    <REQ-IF-HEADER IDENTIFIER="3dd1a60c-59d1-11da-86ca-4bda04a730ce">
      <COMMENT>Embedded OLE object with multiple representation forms.</COMMENT>
      <CREATION-TIME>2005-05-23T12:00:00+02:00</CREATION-TIME>
      <SOURCE-TOOL-ID>Manually written</SOURCE-TOOL-ID>
      <TITLE>Test data RIF72</TITLE>
    </REQ-IF-HEADER>
  </THE-HEADER>
  <CORE-CONTENT>
    <REQ-IF-CONTENT>
      <DATATYPES>
        <DATATYPE-DEFINITION-STRING DESC="This is a standard string type." IDENTIFIER="3631dcd2-59d1-11da-beb2-6fbc179f63e3" LONG-NAME="Standard String Type" MAX-LENGTH="65535"/>
        <DATATYPE-DEFINITION-INTEGER DESC="This is a standard integer type." IDENTIFIER="3631dcd2-59d1-11da-beb2-6fbc179f63e4" LONG-NAME="Standard Integer Type"/>
      </DATATYPES>
      <SPEC-TYPES>
        <SPEC-OBJECT-TYPE DESC="This is an example SpecType with some common attributes." IDENTIFIER="3631dcd2-59d1-11da-beb2-6fbc179f63e2" LAST-CHANGE="2005-05-30T11:42:19+02:00" LONG-NAME="Example SpecType">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING DESC="This attribute contains the author of the requirement as a string." IDENTIFIER="356b02ec-59d1-11da-afa6-6b90abdfb5db" LAST-CHANGE="2005-05-30T11:51:25+02:00" LONG-NAME="Author">
              <DEFAULT-VALUE>
                <ATTRIBUTE-VALUE-STRING THE-VALUE="TBD"/>
              </DEFAULT-VALUE>
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>3631dcd2-59d1-11da-beb2-6fbc179f63e3</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-INTEGER DESC="This attribute contains the id of the requirement as a integer." IDENTIFIER="356b02ec-59d1-11da-afa6-6b90abdfb5dc" LAST-CHANGE="2005-05-30T11:51:25+02:00" LONG-NAME="Age">
              <DEFAULT-VALUE>
                <ATTRIBUTE-VALUE-INTEGER THE-VALUE="0"/>
              </DEFAULT-VALUE>
              <TYPE>
                <DATATYPE-DEFINITION-INTEGER-REF>3631dcd2-59d1-11da-beb2-6fbc179f63e4</DATATYPE-DEFINITION-INTEGER-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-INTEGER>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
        <SPEC-RELATION-TYPE IDENTIFIER="_WYTuPdaVEeCyV-qeruTLwA" LONG-NAME="SpecRelationType1"/>
      </SPEC-TYPES>
      <SPEC-OBJECTS>
        <SPEC-OBJECT IDENTIFIER="2c84e85a-59d1-11da-8ef5-afdbd01c7a79" LAST-CHANGE="2005-05-30T17:22:47+02:00">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Max Mustermann">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>356b02ec-59d1-11da-afa6-6b90abdfb5db</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-INTEGER THE-VALUE="2">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-INTEGER-REF>356b02ec-59d1-11da-afa6-6b90abdfb5dc</ATTRIBUTE-DEFINITION-INTEGER-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-INTEGER>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>3631dcd2-59d1-11da-beb2-6fbc179f63e2</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER="2c84e85a-59d1-11da-8ef5-afdbd01c7a71" LAST-CHANGE="2008-05-30T17:22:47+02:00">
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="Hugo">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>356b02ec-59d1-11da-afa6-6b90abdfb5db</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-INTEGER THE-VALUE="10">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-INTEGER-REF>356b02ec-59d1-11da-afa6-6b90abdfb5dc</ATTRIBUTE-DEFINITION-INTEGER-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-INTEGER>
          </VALUES>
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>3631dcd2-59d1-11da-beb2-6fbc179f63e2</SPEC-OBJECT-TYPE-REF>
          </TYPE>
        </SPEC-OBJECT>
      </SPEC-OBJECTS>
      <SPEC-RELATIONS>
        <SPEC-RELATION IDENTIFIER="_RaVYU9aVEeCyV-qeruTLwA">
          <TYPE>
            <SPEC-RELATION-TYPE-REF>_WYTuPdaVEeCyV-qeruTLwA</SPEC-RELATION-TYPE-REF>
          </TYPE>
          <SOURCE>
						<SPEC-OBJECT-REF>2c84e85a-59d1-11da-8ef5-afdbd01c7a79</SPEC-OBJECT-REF>
					</SOURCE>
					<TARGET>
						<SPEC-OBJECT-REF>2c84e85a-59d1-11da-8ef5-afdbd01c7a71</SPEC-OBJECT-REF>
					</TARGET>
        </SPEC-RELATION>
      </SPEC-RELATIONS>
      <SPECIFICATIONS>
        <SPECIFICATION IDENTIFIER="spec-12345">
          <CHILDREN>
            <SPEC-HIERARCHY IDENTIFIER="3dd45190-59d1-11da-a4bd-f3b1a51212c8" LAST-CHANGE="2005-05-31T10:58:13+02:00" LONG-NAME="Requirements document structure">
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER="3dd6f17a-59d1-11da-9119-43bf5a5fdf50">
                  <OBJECT>
                    <SPEC-OBJECT-REF>2c84e85a-59d1-11da-8ef5-afdbd01c7a71</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
              <OBJECT>
                <SPEC-OBJECT-REF>2c84e85a-59d1-11da-8ef5-afdbd01c7a79</SPEC-OBJECT-REF>
              </OBJECT>
            </SPEC-HIERARCHY>
          </CHILDREN>
        </SPECIFICATION>
      </SPECIFICATIONS>
    </REQ-IF-CONTENT>
  </CORE-CONTENT>
</REQ-IF>
`;

export const sample_xml2 = `
<?xml version="1.0" encoding="UTF-8"?>
<REQ-IF xmlns="http://www.omg.org/spec/ReqIF/20110401/reqif.xsd"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.omg.org/spec/ReqIF/20110401/reqif.xsd http://www.omg.org/spec/ReqIF/20110401/reqif.xsd"
  xml:lang="en">
  <THE-HEADER>
    <REQ-IF-HEADER IDENTIFIER="EF5AEFF3-C695-488A-9955-EDAAEACFE359">
      <COMMENT>Optional comment associated with the Exchange Document as a whole</COMMENT>
      <CREATION-TIME>2011-06-13T10:24:18+01:00</CREATION-TIME>
      <REPOSITORY-ID>A4123EB9-CC82-4B62-95E1-31CB3203E39C</REPOSITORY-ID>
      <REQ-IF-TOOL-ID>SparxSystems Enterprise Architect 8.0</REQ-IF-TOOL-ID>
      <REQ-IF-VERSION>1.0</REQ-IF-VERSION>
      <SOURCE-TOOL-ID>microTool in-Step</SOURCE-TOOL-ID>
      <TITLE>Example ReqIF file</TITLE>
    </REQ-IF-HEADER>
  </THE-HEADER>
  <CORE-CONTENT>
    <REQ-IF-CONTENT>
      <DATATYPES>
        <DATATYPE-DEFINITION-STRING IDENTIFIER = "Text" LAST-CHANGE = "2011-06-13T00:00:00+01:00" MAX-LENGTH = "1000">
        </DATATYPE-DEFINITION-STRING>
        <DATATYPE-DEFINITION-ENUMERATION IDENTIFIER = "Status" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
          <SPECIFIED-VALUES>
            <ENUM-VALUE DESC = "Requirement has been proposed." IDENTIFIER = "Proposed" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "1" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "Requirement has been accepted." IDENTIFIER = "Accepted" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "2" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "Requirement has been rejected or de-scoped." IDENTIFIER = "Rejected" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "3" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "Requirement has been satisfied by an implementation of system components." IDENTIFIER = "Implemented" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "4" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "Satisfaction of requirement has been approved by QA and customer/user." IDENTIFIER = "Approved" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "5" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
          </SPECIFIED-VALUES>
        </DATATYPE-DEFINITION-ENUMERATION>
        <DATATYPE-DEFINITION-ENUMERATION IDENTIFIER = "BindingForce" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
          <SPECIFIED-VALUES>
            <ENUM-VALUE DESC = "The fulfilment of the requirement is essential, i.e. in the event of non-fulfilment the system will not satisfy stakeholder needs or will result in a deficiency that cannot be ameliorated." IDENTIFIER = "Mandatory" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "1" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "The fulfilment of the requirement should be aspired, but non-fulfilment will not result in an inacceptable deficiency." IDENTIFIER = "Worthwhile" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "2" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
            <ENUM-VALUE DESC = "The requirement is a nice-to-have one, or it has growth potential for systems future stages of expansion." IDENTIFIER = "Optional" LAST-CHANGE = "2011-06-13T00:00:00+01:00">
              <PROPERTIES>
                <EMBEDDED-VALUE KEY = "3" OTHER-CONTENT = "foo" />
              </PROPERTIES>
            </ENUM-VALUE>
          </SPECIFIED-VALUES>
        </DATATYPE-DEFINITION-ENUMERATION>
      </DATATYPES>
      <SPEC-TYPES>
        <SPECIFICATION-TYPE DESC = "A User Requirements Specification (a.k.a. Stakeholder Requirements Specification) specifies the requirements the user expects from the system to be constructed. User Requirements are the top level of requirements. They capture the needs of users, the customer and other sources of requirements like legal regulations and internal company high level requirements." IDENTIFIER = "URS" LAST-CHANGE = "2011-06-13T00:00:00+01:00" LONG-NAME = "User Requirements Specification">
        </SPECIFICATION-TYPE>
        <SPECIFICATION-TYPE DESC = "A System Requirements Specification contains the next level of requirements after user requirements. The aim of system requirements is to set precise technical requirements for the system development. System requirements are derived from user requirements by considering existing technology, components and so on." IDENTIFIER = "SRS" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "System Requirements Specification">
        </SPECIFICATION-TYPE>
        <SPECIFICATION-TYPE DESC = "A Subsystem/Components Requirements Specification contains the next level of requirements after system requirements.The aim of subsystem and component requirements is to set precise technical requirements for the development of a subsystem/component. Subsystem/component requirements are derived from system requirements by considering existing technology, components, interfaces and so on." IDENTIFIER = "CRS" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Subsystem/Components Requirements Specification">
        </SPECIFICATION-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A functional requirement describes a function of the system, i.e. what the system must do resp. a service the system provides to its users." IDENTIFIER = "FUNC-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Functional Requirement">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING DESC = "The textual description of the requirement." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "FUNC-REQ-TXT">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>Text</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-ENUMERATION DESC = "The status of the requirement." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "FUNC-REQ-STATUS" MULTI-VALUED = "false">
              <TYPE>
                <DATATYPE-DEFINITION-ENUMERATION-REF>Status</DATATYPE-DEFINITION-ENUMERATION-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-ENUMERATION>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A (user) story is a special kind of functional requirement, which uses one or more sentences in the everyday or business language of the end user that captures what the user (resp. a role) wants to achieve. User stories generally follow the following template: &quot;As a &lt;role&gt;, I want &lt;goal/desire&gt; so that &lt;benefit&gt;.&quot;" IDENTIFIER = "STORY" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "User Story">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING DESC = "The story." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "STORY-TXT">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>Text</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-ENUMERATION DESC = "The status of the requirement." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "STORY-STATUS" MULTI-VALUED = "false">
              <TYPE>
                <DATATYPE-DEFINITION-ENUMERATION-REF>Status</DATATYPE-DEFINITION-ENUMERATION-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-ENUMERATION>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A performance requirement is a non-functional requirement that describes the amount of useful work accomplished by the system compared to the time and resources used." IDENTIFIER = "PERF-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Performance Requirement">
          <SPEC-ATTRIBUTES>
            <ATTRIBUTE-DEFINITION-STRING DESC = "The textual description of the performance requirement." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "PERF-REQ-TXT">
              <TYPE>
                <DATATYPE-DEFINITION-STRING-REF>Text</DATATYPE-DEFINITION-STRING-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-STRING>
            <ATTRIBUTE-DEFINITION-ENUMERATION DESC = "The status of the requirement." LAST-CHANGE = "2011-06-13T10:24:18+01:00" IDENTIFIER = "PERF-REQ-STATUS" MULTI-VALUED = "false">
              <TYPE>
                <DATATYPE-DEFINITION-ENUMERATION-REF>Status</DATATYPE-DEFINITION-ENUMERATION-REF>
              </TYPE>
            </ATTRIBUTE-DEFINITION-ENUMERATION>
          </SPEC-ATTRIBUTES>
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A scalability requirement is a non-functional requirement that describes the ability of the system to handle growing amounts of work in a graceful manner or its ability to be enlarged to accommodate that growth." IDENTIFIER = "SCALE-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Scalability Requirement">
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A security requirement is a non-functional requirement that describes the stipulated degree of the systems protection against danger, damage, misuse, unauthorized access, data loss and crime." IDENTIFIER = "SEC-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Security Requirement">
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A maintainability requirement is a non-functional requirement that describes the ease with which the system can be maintained in order to isolate defects or their cause, correct defects or their cause, meet new requirements, make future maintenance easier, or cope with a changed environment." IDENTIFIER = "MAIN-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Maintainability Requirement">
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A usability requirement is a non-functional requirement describing the intended ease of use (ergonomical comfort) and learnability of the system." IDENTIFIER = "USABILITY-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Usability Requirement">
        </SPEC-OBJECT-TYPE>
        <SPEC-OBJECT-TYPE DESC = "A legal requirement is a non-functional requirement that states a regulation that must be recognized by the system. Regulations could be laws, standards, specifications, etc." IDENTIFIER = "LEGAL-REQ" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Legal Requirement">
        </SPEC-OBJECT-TYPE>
        <SPEC-RELATION-TYPE DESC = "The deriveReq relationship can be used to specify when one requirement is a derivation from another requirement. This relationship expresses the relation between a particular requirement and the requirements that support this requirement." IDENTIFIER = "deriveReq" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Derive Requirement Relationship">
        </SPEC-RELATION-TYPE>
        <SPEC-RELATION-TYPE DESC = "The refine relationship can be used to specify an element that refines a requirement, i.e. the element is an increase in detail compared to the requirement." IDENTIFIER = "refine" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Refine Relationship">
        </SPEC-RELATION-TYPE>
      </SPEC-TYPES>
      <SPEC-OBJECTS>
        <SPEC-OBJECT DESC = "" IDENTIFIER = "R001" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Observe earths surface.">
          <TYPE>
            <SPEC-OBJECT-TYPE-REF>FUNC-REQ</SPEC-OBJECT-TYPE-REF>
          </TYPE>
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The system shall observe the earths surface.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>FUNC-REQ-TXT</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-ENUMERATION>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>FUNC-REQ-STATUS</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
              </DEFINITION>
              <VALUES>
                <ENUM-VALUE-REF>Proposed</ENUM-VALUE-REF>
              </VALUES>
            </ATTRIBUTE-VALUE-ENUMERATION>
          </VALUES>
        </SPEC-OBJECT>
        <SPEC-OBJECT DESC = "" IDENTIFIER = "R002" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Spotting fire">
           <TYPE>
             <SPEC-OBJECT-TYPE-REF>FUNC-REQ</SPEC-OBJECT-TYPE-REF>
           </TYPE>
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The system shall alert the control center if it spots a fire in a forest.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>FUNC-REQ-TXT</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-ENUMERATION>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>FUNC-REQ-STATUS</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
              </DEFINITION>
              <VALUES>
                <ENUM-VALUE-REF>Proposed</ENUM-VALUE-REF>
              </VALUES>
            </ATTRIBUTE-VALUE-ENUMERATION>
          </VALUES>
        </SPEC-OBJECT>
        <SPEC-OBJECT IDENTIFIER = "R003" LAST-CHANGE = "2011-06-13T10:24:18+01:00" LONG-NAME = "Fast system">
           <TYPE>
             <SPEC-OBJECT-TYPE-REF>PERF-REQ</SPEC-OBJECT-TYPE-REF>
           </TYPE>
          <VALUES>
            <ATTRIBUTE-VALUE-STRING THE-VALUE="The time span between detection of a fire and alerting of control center shall be less than 3 sec.">
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-STRING-REF>PERF-REQ-TXT</ATTRIBUTE-DEFINITION-STRING-REF>
              </DEFINITION>
            </ATTRIBUTE-VALUE-STRING>
            <ATTRIBUTE-VALUE-ENUMERATION>
              <DEFINITION>
                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>PERF-REQ-STATUS</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
              </DEFINITION>
              <VALUES>
                <ENUM-VALUE-REF>Proposed</ENUM-VALUE-REF>
              </VALUES>
            </ATTRIBUTE-VALUE-ENUMERATION>
          </VALUES>
        </SPEC-OBJECT>
      </SPEC-OBJECTS>
      <SPEC-RELATIONS>
        <SPEC-RELATION  IDENTIFIER = "ADB3C6E4-8014-4167-9D21-A8E13D98C6CA" LAST-CHANGE = "2011-06-13T10:24:18+01:00">
          <SOURCE>
            <SPEC-OBJECT-REF>FUNC-REQ-1</SPEC-OBJECT-REF>
          </SOURCE>
          <TARGET>
            <SPEC-OBJECT-REF>FUNC-REQ-2</SPEC-OBJECT-REF>
          </TARGET>
          <TYPE>
            <SPEC-RELATION-TYPE-REF>deriveReq</SPEC-RELATION-TYPE-REF>
          </TYPE>
        </SPEC-RELATION>
      </SPEC-RELATIONS>
      <SPECIFICATIONS>
        <SPECIFICATION LONG-NAME="Forest Fire Detection System" DESC="This is the User Requirements Specification for the Forest Fire Detection System of Customer Y." IDENTIFIER = "F785DE59-9D79-4DEB-9709-AACC015EF7A1" LAST-CHANGE = "2011-06-13T10:24:18+01:00">
          <CHILDREN>
            <SPEC-HIERARCHY IDENTIFIER = "E65E8A75-F1C1-48D1-9681-8AD99E2BE6EE" LAST-CHANGE = "2011-06-13T10:24:18+01:00">
              <OBJECT>
                <SPEC-OBJECT-REF>FUNC-REQ-1</SPEC-OBJECT-REF>
              </OBJECT>
              <CHILDREN>
                <SPEC-HIERARCHY IDENTIFIER = "A980AE9C-9C06-40B8-BFAE-213C27451649" LAST-CHANGE = "2011-06-13T10:24:18+01:00">
                  <OBJECT>
                    <SPEC-OBJECT-REF>FUNC-REQ-2</SPEC-OBJECT-REF>
                  </OBJECT>
                </SPEC-HIERARCHY>
              </CHILDREN>
            </SPEC-HIERARCHY>
          </CHILDREN>
          <TYPE>
            <SPECIFICATION-TYPE-REF>URS</SPECIFICATION-TYPE-REF>
          </TYPE>
        </SPECIFICATION>
      </SPECIFICATIONS>
      <SPEC-RELATION-GROUPS>
      </SPEC-RELATION-GROUPS>
    </REQ-IF-CONTENT>
  </CORE-CONTENT>
</REQ-IF>

`;