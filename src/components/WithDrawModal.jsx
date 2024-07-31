import React, { useState } from "react";
import { Button, Modal , Form} from "react-bootstrap";

const WithDrawModal = (props) => {

    const [withDrawAmount, setWithDrawAmount] = useState(0);

    const updateWithDrawAmount = () => {
        props.withDrawHistory(withDrawAmount);
        props.handleClose();
        setWithDrawAmount(0);
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>With Draw Money</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        type="text"
                        id="input"
                        placeholder="Enter amount"
                        name="deposit-amount"
                        onChange={e => setWithDrawAmount(e.target.value )}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={updateWithDrawAmount}>
                    OK
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default WithDrawModal;