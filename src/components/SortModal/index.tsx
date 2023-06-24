import { useState, useRef, useEffect } from "react";
import { View, Modal, Animated } from "react-native";
import styles from "./styles";

interface SortModalProps {
  isOpen: boolean;
  children: JSX.Element[];
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, children }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [isOpen]);

  const toggleModal = () => {
    if (isOpen) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default SortModal;
