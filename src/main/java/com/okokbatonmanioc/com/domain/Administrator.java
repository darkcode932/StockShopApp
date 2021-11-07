package com.okokbatonmanioc.com.domain;

import java.io.Serializable;
import java.time.Instant;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Administrator.
 */
@Entity
@Table(name = "administrator")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Administrator implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "id_a")
    private Long idA;

    @Column(name = "first_name_a")
    private String firstNameA;

    @Column(name = "last_name_a")
    private String lastNameA;

    @Column(name = "birthday_a")
    private Instant birthdayA;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Administrator id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdA() {
        return this.idA;
    }

    public Administrator idA(Long idA) {
        this.setIdA(idA);
        return this;
    }

    public void setIdA(Long idA) {
        this.idA = idA;
    }

    public String getFirstNameA() {
        return this.firstNameA;
    }

    public Administrator firstNameA(String firstNameA) {
        this.setFirstNameA(firstNameA);
        return this;
    }

    public void setFirstNameA(String firstNameA) {
        this.firstNameA = firstNameA;
    }

    public String getLastNameA() {
        return this.lastNameA;
    }

    public Administrator lastNameA(String lastNameA) {
        this.setLastNameA(lastNameA);
        return this;
    }

    public void setLastNameA(String lastNameA) {
        this.lastNameA = lastNameA;
    }

    public Instant getBirthdayA() {
        return this.birthdayA;
    }

    public Administrator birthdayA(Instant birthdayA) {
        this.setBirthdayA(birthdayA);
        return this;
    }

    public void setBirthdayA(Instant birthdayA) {
        this.birthdayA = birthdayA;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Administrator)) {
            return false;
        }
        return id != null && id.equals(((Administrator) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Administrator{" +
            "id=" + getId() +
            ", idA=" + getIdA() +
            ", firstNameA='" + getFirstNameA() + "'" +
            ", lastNameA='" + getLastNameA() + "'" +
            ", birthdayA='" + getBirthdayA() + "'" +
            "}";
    }
}
