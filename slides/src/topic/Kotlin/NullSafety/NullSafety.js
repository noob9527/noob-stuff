import React from 'react';
import { Appear, Fill, Fit, Layout, Slide, Heading, List, ListItem, S } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

const userInterface = `
public interface User {
    String getFullName();
}
`.trim();

const isJohnSnowV1 = `
// author: Bob
public boolean isJohnSnow(User user) {
    return user.getFullName().equals("John Snow");
}
`.trim();

const greeting = `
// author: Alice
public void greeting(User user) {
    if (isJohnSnow(user)) {
        sendMessage(user, "You know nothing!");
    }
}
`.trim();

const nullableAnnotation = `
@org.jetbrains.annotations.Nullable
public Boolean isJohnSnow(User user) {
    String fullName = user.getFullName();
    if (fullName == null) return null;
    return fullName.equals("John Snow");
}
`.trim();

export default () => (
  <Slide maxHeight="90vh" maxWidth="90vw">
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '40%' }}>
        <Layout style={{ flexDirection: 'column' }}>
          <Fill>
            {DefaultCodePane({ lang: 'java', source: userInterface })}
          </Fill>
          <Appear>
            <Fill>
              {DefaultCodePane({ lang: 'java', source: isJohnSnowV1 })}
            </Fill>
          </Appear>
          <Appear>
            <Fill>
              {DefaultCodePane({ lang: 'java', source: greeting })}
            </Fill>
          </Appear>
        </Layout>
      </Fit>
      <Fit style={{ flexBasis: '40%' }}>
        <Appear>
          <div>
            <Heading textSize="85px" size={2} textColor="white" margin="0 0 60px 0">Solution</Heading>
            <List>
              <ListItem textSize="45px"><S type="strikethrough">Check Before Calling</S></ListItem>
              <Appear><ListItem textSize="45px"><S type="strikethrough">Check After Returning</S></ListItem></Appear>
              <Appear><ListItem textSize="45px"><S type="strikethrough">Another Default Value</S></ListItem></Appear>
              <Appear><ListItem textSize="45px"><S type="strikethrough">Optional</S></ListItem></Appear>
              <Appear>
                <div>
                  <ListItem textSize="45px" margin="0 0 20px 0">Nullable Annotation</ListItem>
                  {DefaultCodePane({ lang: 'java', source: nullableAnnotation })}
                </div>
              </Appear>
            </List>
          </div>
        </Appear>
      </Fit>
    </Layout>
  </Slide>
);

