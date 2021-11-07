package com.okokbatonmanioc.com.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.okokbatonmanioc.com.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class AdministratorTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Administrator.class);
        Administrator administrator1 = new Administrator();
        administrator1.setId(1L);
        Administrator administrator2 = new Administrator();
        administrator2.setId(administrator1.getId());
        assertThat(administrator1).isEqualTo(administrator2);
        administrator2.setId(2L);
        assertThat(administrator1).isNotEqualTo(administrator2);
        administrator1.setId(null);
        assertThat(administrator1).isNotEqualTo(administrator2);
    }
}
