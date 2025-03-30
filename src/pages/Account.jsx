import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <Heading as="h1" className="text-center mb-6">
        Update Your Account
      </Heading>

      <section className="mb-8">
        <Heading as="h3" className="mb-2">
          Update User Data
        </Heading>
        <Row>
          <UpdateUserDataForm />
        </Row>
      </section>

      <section>
        <Heading as="h3" className="mb-2">
          Update Password
        </Heading>
        <Row>
          <UpdatePasswordForm />
        </Row>
      </section>
    </div>
  );
}

export default Account;
