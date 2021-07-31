import {StyleSheet} from 'react-native';

export default (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground
  },
  floatingContainer: {
    borderRadius: 15,
    margin: 15,
    padding: 10,
    backgroundColor: colors.secondaryBackground
  },
  floatingContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  floatingContainerTitle: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary
  },
  floatingContainerSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.subtitle
  },
  floatingContainerButtons: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  buttons: {
    borderRadius: 15,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: colors.white
  },
  activeButton: {},
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text.title
  },
  retryButton: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.accent
  },
  retryText: {
    fontSize: 18,
    paddingHorizontal: 5,
    color: colors.white
  },
});
