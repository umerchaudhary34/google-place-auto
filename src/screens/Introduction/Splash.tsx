import React, {useContext, useEffect} from 'react';
import Container from '../../common/Container';
import ResponsiveText from '../../common/ResponsiveText';
import {themeContext} from '../../config/themeContext';

type Props = {
  navigation: any;
};

const Splash: React.FC<Props> = ({navigation}) => {
  const theme = useContext(themeContext);

  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('Home');
    }, 5000);
  }, [navigation]);

  return (
    <Container style={[styles.container, {backgroundColor: theme.background}]}>
      <ResponsiveText
        bold
        font={8}
        style={{color: theme.text, textAlign: 'center'}}>
        Google Places Auto Complete
      </ResponsiveText>
    </Container>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  splashText: {},
};

export default Splash;
