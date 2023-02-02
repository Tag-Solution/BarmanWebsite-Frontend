import React from "react";
import styled from "styled-components";

const ContactForm = () => {
	return (
		<Wrapper>
			<div className="main-form-container">
				<form action="" id="mainForm" className="main-form">
					{/* Single Input */}
					<div className="main-form-single-input">
						<label htmlFor="Name">Name</label>
						<input type="text" name="Name" id="Name" placeholder="Name" />
					</div>

					{/* Single Input */}
					<div className="main-form-single-input">
						<label htmlFor="Phone">Phone</label>
						<input type="text" name="Phone" id="Phone" placeholder="Phone" />
					</div>

					{/* Single Input */}
					<div className="main-form-single-input">
						<label htmlFor="Email">Email</label>
						<input type="text" name="Email" id="Email" placeholder="E-Mail" />
					</div>

					{/* Single Input */}
					<div className="main-form-single-input">
						<label htmlFor="Subject">Subject</label>
						<input
							type="text"
							name="Subject"
							id="Subject"
							placeholder="Subject"
						/>
					</div>

					{/* Single Input */}
					<div className="main-form-single-input">
						<label htmlFor="Message">Message</label>
						<textarea
							type="text"
							name="Message"
							id="Message"
							placeholder="Message..."
						/>
					</div>

					{/* Submit Form */}
					<div className="main-form-btn-container">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main``;

export default ContactForm;
