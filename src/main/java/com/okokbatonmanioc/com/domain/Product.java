package com.okokbatonmanioc.com.domain;

import java.io.Serializable;
import java.time.Instant;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Product.
 */
@Entity
@Table(name = "product")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "id_p")
    private String idP;

    @Column(name = "title")
    private String title;

    @Column(name = "type")
    private String type;

    @Column(name = "retention_date")
    private Instant retentionDate;

    @Column(name = "description")
    private String description;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Product id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdP() {
        return this.idP;
    }

    public Product idP(String idP) {
        this.setIdP(idP);
        return this;
    }

    public void setIdP(String idP) {
        this.idP = idP;
    }

    public String getTitle() {
        return this.title;
    }

    public Product title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return this.type;
    }

    public Product type(String type) {
        this.setType(type);
        return this;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Instant getRetentionDate() {
        return this.retentionDate;
    }

    public Product retentionDate(Instant retentionDate) {
        this.setRetentionDate(retentionDate);
        return this;
    }

    public void setRetentionDate(Instant retentionDate) {
        this.retentionDate = retentionDate;
    }

    public String getDescription() {
        return this.description;
    }

    public Product description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Product)) {
            return false;
        }
        return id != null && id.equals(((Product) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Product{" +
            "id=" + getId() +
            ", idP='" + getIdP() + "'" +
            ", title='" + getTitle() + "'" +
            ", type='" + getType() + "'" +
            ", retentionDate='" + getRetentionDate() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
