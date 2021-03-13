import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from '../utils/i18n';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#efefef',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    margin: 16,
    padding: 8,
  },
  input: {
    marginLeft: 8,
    padding: 4,
    flex: 1,
  },
});

interface SearchBarProps {
  onChange: (x: string) => void;
  searchTerm?: string;
}

const SearchBar:React.FC<SearchBarProps> = ({ onChange, searchTerm = '' }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.background}>
      <Feather name="search" size={24} />
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={t('search.placeholder')}
        value={searchTerm}
      />
    </View>
  );
};

export default SearchBar;
