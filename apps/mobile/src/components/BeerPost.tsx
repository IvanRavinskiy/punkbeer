import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

export const BeerPost = () => {
  return (
    <>
      <Text>BEER NAME_ ALIVARIA</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://alivaria.by/media/13351/by_alivaria-1894-premium.png',
        }}
      />
      <Text>
        Description: kjdnkjsd nf ksfdn ksdnf ksd fksdn fksd ks kfsndk fskf
        nskfksdfksdf ksnfksd sdkfnksdfn k df ks kjdnkjsd nf ksfdn ksdnf ksd
        fksdn fksd ks kfsndk fskf nskfksdfksdf ksnfksd sdkfnksdfn k df ks
        kjdnkjsd nf ksfdn ksdnf ksd fksdn fksd ks kfsndk fskf nskfksdfksdf
        ksnfksd sdkfnksdfn k df ks
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 135,
    height: 400,
  },
});
