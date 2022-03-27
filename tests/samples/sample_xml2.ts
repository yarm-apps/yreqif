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