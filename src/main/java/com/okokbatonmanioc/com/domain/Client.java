package com.okokbatonmanioc.com.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Client.
 */
@Entity
@Table(name = "client")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "id_c")
    private Long idC;

    @Column(name = "first_name_c")
    private String firstNameC;

    @Column(name = "last_name_c")
    private String lastNameC;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number_c")
    private Long phoneNumberC;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Client id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdC() {
        return this.idC;
    }

    public Client idC(Long idC) {
        this.setIdC(idC);
        return this;
    }

    public void setIdC(Long idC) {
        this.idC = idC;
    }

    public String getFirstNameC() {
        return this.firstNameC;
    }

    public Client firstNameC(String firstNameC) {
        this.setFirstNameC(firstNameC);
        return this;
    }

    public void setFirstNameC(String firstNameC) {
        this.firstNameC = firstNameC;
    }

    public String getLastNameC() {
        return this.lastNameC;
    }

    public Client lastNameC(String lastNameC) {
        this.setLastNameC(lastNameC);
        return this;
    }

    public void setLastNameC(String lastNameC) {
        this.lastNameC = lastNameC;
    }

    public String getEmail() {
        return this.email;
    }

    public Client email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhoneNumberC() {
        return this.phoneNumberC;
    }

    public Client phoneNumberC(Long phoneNumberC) {
        this.setPhoneNumberC(phoneNumberC);
        return this;
    }

    public void setPhoneNumberC(Long phoneNumberC) {
        this.phoneNumberC = phoneNumberC;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Client)) {
            return false;
        }
        return id != null && id.equals(((Client) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Client{" +
            "id=" + getId() +
            ", idC=" + getIdC() +
            ", firstNameC='" + getFirstNameC() + "'" +
            ", lastNameC='" + getLastNameC() + "'" +
            ", email='" + getEmail() + "'" +
            ", phoneNumberC=" + getPhoneNumberC() +
            "}";
    }
}
