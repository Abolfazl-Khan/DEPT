import { NextPage } from 'next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './styles/ClientQuestionForm.module.scss';
import useClientQuestionForm from './hook/useClientQuestionForm';
import { ErrorMessage } from '@hookform/error-message';

const ClientQuestionForm: NextPage = () => {
  const { register, errors, handleSubmit, onSubmit } = useClientQuestionForm();

  return (
    <Row className='p-5 w-100'>
      <Col md='3' className='my-4'>
        <p className={styles.formTitle}>QUESTION? WE ARE HERE TO HELP!</p>
      </Col>

      <Col md='9'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' className='my-4'>
              <Form.Group>
                <Form.Label className='mb-0'>NAME</Form.Label>
                <Form.Control
                  {...register('name', { required: 'This field is required' })}
                  className={styles.formInput}
                  type='text'
                />
                <ErrorMessage
                  errors={errors}
                  name='name'
                  render={({ message }) => (
                    <p className='my-2 text-danger '>{message}</p>
                  )}
                />
              </Form.Group>
            </Col>

            <Col md='4' className='my-4'>
              <Form.Group>
                <Form.Label className='mb-0'>EMAIL</Form.Label>
                <Form.Control
                  {...register('email', { required: 'This field is required' })}
                  className={styles.formInput}
                  type='text'
                />
                <ErrorMessage
                  errors={errors}
                  name='email'
                  render={({ message }) => (
                    <p className='my-2 text-danger '>{message}</p>
                  )}
                />
              </Form.Group>
            </Col>
          </Row>

          <Col md='4' className='my-4'>
            <Form.Group>
              <Form.Label className='mb-0'>MESSAGE</Form.Label>
              <Form.Control
                {...register('message', { required: 'This field is required' })}
                className={styles.formInput}
                as='textarea'
              />
              <ErrorMessage
                errors={errors}
                name='message'
                render={({ message }) => (
                  <p className='my-2 text-danger '>{message}</p>
                )}
              />
            </Form.Group>
          </Col>
          <Col md='3' lg='2'>
            <Button
              variant='outline-dark'
              type='submit'
              className={styles.submitButton}
            >
              SEND
            </Button>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default ClientQuestionForm;
