import { useIntl } from 'react-intl';
import { Button, Icon, Text, useToast, ModalTrigger, Modal } from 'react-basics';
import PasswordEditForm from 'components/pages/settings/profile/PasswordEditForm';
import Icons from 'components/icons';
import { labels, messages } from 'components/messages';

export default function PasswordChangeButton() {
  const { formatMessage } = useIntl();
  const { toast, showToast } = useToast();

  const handleSave = () => {
    showToast({ message: formatMessage(messages.saved), variant: 'success' });
  };

  return (
    <>
      {toast}
      <ModalTrigger modalProps={{ title: formatMessage(labels.changePassword) }}>
        <Button>
          <Icon>
            <Icons.Lock />
          </Icon>
          <Text>{formatMessage(labels.changePassword)}</Text>
        </Button>
        <Modal>{close => <PasswordEditForm onSave={handleSave} onClose={close} />}</Modal>
      </ModalTrigger>
    </>
  );
}