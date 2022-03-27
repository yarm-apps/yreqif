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
