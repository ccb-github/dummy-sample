import { Paragraph, ProgressBar, Snackbar}   from 'react-native-paper'

const ConfirmDialog = () => {
 return (   
 <Dialog visible={true}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Are you sure about the </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button>Yes</Button>
            <Button>No</Button>
          </Dialog.Actions>
      </Dialog>
 )
}