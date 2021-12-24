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
    marginBottom: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    padding: 4,
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
