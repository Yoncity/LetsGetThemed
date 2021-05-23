import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingContainer: {
    borderRadius: 15,
    margin: 15,
    padding: 10,
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
  },
  floatingContainerSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  },
  retryButton: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  retryText: {
    fontSize: 18,
    paddingHorizontal: 5,
  },
});
